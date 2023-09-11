import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Idata } from '../../interface/product';
import { getIdData } from '../../api/product.servcies';
import { Helmet } from 'react-helmet-async';
import { convert } from 'html-to-text';
const ProductDetails = () => {
  const [data, setData] = useState<Idata | null>(null); // Khởi tạo data với giá trị ban đầu là null
  const { id } = useParams();

  useEffect(() => {
    const fetchDataDetails = async (id: number) => {
      try {
        const res = await getIdData(id);
        setData(res.data); // Cập nhật state data khi dữ liệu được lấy về thành công
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
      }
    };

    if (id) {
      fetchDataDetails(Number(id));
    }
  }, [id]);

  return (
    <div>
      <Helmet>
          <title> {data?.name || 'Shopee 09/09'}   </title>
          <meta name='description' content={convert(data?.name || "",{
            limits: {
              maxInputLength : 100
            }
          }) } />
      </Helmet>
      <p>{data?.id}</p>
      <p>{data?.name}</p>
      <p>{data?.price}</p>
    </div>
  );
};
export default ProductDetails;
