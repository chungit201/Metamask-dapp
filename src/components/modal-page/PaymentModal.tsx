import React, {useState} from "react";
import {Modal, Button, Row, Col, Input} from 'antd';
const PaymentModal:React.FunctionComponent = () =>{
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>

    </div>
  )
}
export default PaymentModal
