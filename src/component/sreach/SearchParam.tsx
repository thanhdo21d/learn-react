import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function SearchParam() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [paramName, setParamName] = useState(searchParams.get('paramName') || '');
  const [paramValue, setParamValue] = useState(searchParams.get('paramValue') || '');

  const handleQueryParamChange = (paramName : any, newValue : any) => {
    if (paramName === 'paramName') {
      setParamName(newValue);
    } else if (paramName === 'paramValue') {
      setParamValue(newValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Cập nhật giá trị tham số truy vấn
    setSearchParams({ paramName, paramValue });
    // Điều hướng (redirect) tới URL mới với tham số truy vấn
    navigate(`?paramName=${paramName}&paramValue=${paramValue}`);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {/* Input fields để hiển thị và cập nhật giá trị tham số truy vấn */}
        <input
          type="text"
          value={paramName}
          onChange={(e) => handleQueryParamChange('paramName', e.target.value)}
          placeholder="Param Name"
        />
        <input
          type="text"
          value={paramValue}
          onChange={(e) => handleQueryParamChange('paramValue', e.target.value)}
          placeholder="Param Value"
        />
        <button type='submit'>Enter</button>
      </form>

      {/* Hiển thị giá trị của tất cả các tham số truy vấn */}
      <div>
        <p>Param Name: {paramName}</p>
        <p>Param Value: {paramValue}</p>
      </div>
    </div>
  );
}

export default SearchParam;
