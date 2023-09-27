const task = mongoose.model(
  'tasks',
  mongoose.Schema({
    task: String,
    user: [
      {
        username: String,
        permision: String,
      },
    ],
  })
);

//
// new task({
//   task:"Thêm xoá sản phẩm",
//   user:[{
//     username:"kous1608",
//     permision:"all",
//   },
//   {
//     username:"mvc1111",
//     permision:"all",

//   },
//   {
//     username:"datnguyen2003",
//     permision:"all",
//   },
//   {
//     username: "mvc222",
//     permision:"all",
//   }

//   ]
// }).save()

//chọn bảng nhiệm vụ là mảng chứ username của user được cho phép làm task đó
app.get('/task', async (req, res) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  const refreshTokenCookie = cookies.refreshToken;
  const tasks = await task.find({});

  if (refreshTokenCookie) {
    const decoded = jwt.verify(refreshTokenCookie, 'ReFreshSeCret');
    // xác minh user là admin
    var permit = 'all';
    if (decoded.role.name == 'admin') permit = 'all';
    if (decoded.role.name == 'manager') permit = 'manager';

    if (req.query.addUser && req.query.task) {
      let check = await task.find({});
      let array = check[req.query.task - 1]['user'];

      let isDawn = false;
      for (let i = 0; i < check[req.query.task - 1]['user'].length; i++) {
        if (check[req.query.task - 1]['user'][i].username == req.query.addUser) {
          isDawn = true;
          break;
        }
      }
      if (!isDawn) {
        array.push({ username: req.query.addUser, permision: 'all' });
        new task({
          task: check[req.query.task - 1]['task'],
          user: array,
        }).save();
        if (await task.deleteOne({ task: check[req.query.task - 1]['task'] }))
          return res.json({ status: 'success' });
      }
    }
    if (req.query.DeleteUser && req.query.task) {
      //trường hợp xoá user khỏi 1 nhiệm vụ
      let check = await task.find({});
      let array = []; // tạo mảng mới để copy
      let isDawn = false;

      if ((permit = 'all')) {
        check[req.query.task - 1]['user'].forEach((value) => {
          if (req.query.DeleteUser != value.username) array.push(value);
          else isDawn = true; // nếu user bị xoá có trong mảng thì bỏ qua ko copy  và đánh dấu lại
        });
      }
      if ((permit = 'manager')) {
        check[req.query.task - 1]['user'].forEach((value) => {
          if (req.query.DeleteUser != value.username) array.push(value);
          else {
            isDawn = true;
            array.push({ username: value.username, permision: 'manager' });
          } // nếu user bị xoá có trong mảng thì bỏ qua ko copy  và đánh dấu lại
        });
      }
      if (isDawn) {
        new task({
          task: check[req.query.task - 1]['task'],
          user: array,
        }).save();
        if (await task.deleteOne({ task: check[req.query.task - 1]['task'] }))
          return res.json({ status: 'success' });
      }
    }
  }

  res.json(tasks);
});
app.get('/test', async (req, res) => {
  res.sendFile(__dirname + '/role.html');
});

server.listen(4000, (req, res) => {
  console.log(chalk.bgCyanBright(chalk.yellow('Bot 2 start success !')));
});
