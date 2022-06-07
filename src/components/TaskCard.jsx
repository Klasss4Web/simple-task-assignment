import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { MdModeEdit, MdNotificationAdd } from "react-icons/md"
import { IoMdCheckmark } from "react-icons/io"
import { useDispatch, useSelector } from 'react-redux';

export const TaskCard = ({ task, setShowTaskCard, setShowAddTaskForm, addTaskToStore, setEdit, handleUpdate }) => {

  const icon = useSelector(state=>state.user.userData?.icon)

  const dispatch = useDispatch()
  return (
    <Card body key={task?.id}>
    <Row className="justify-content-between align-items-center">
      <Col lg="6">
        <Row className="justify-content-start">
          <Col lg="2" className="">
           <img src={icon} alt="" style={{ width: "40px", marginRight: "10px"}} />
          </Col>
          <Col lg="10" className="ml-2">
           <h6 style={{color: "#43566f"}} className="text-truncate" data-toggle="tooltip" data-placement="top" title={task?.task_msg}>{task?.task_msg}</h6>
           <p style={{lineHeight: "0", color: "#c1666e"}}>{task?.task_date}</p>
          </Col>
        </Row>
      </Col>
      <Col lg="4" className="">
        <Row className="justify-content-end">
          <Col lg="4">
          <div style={{ border: "1px solid #999", textAlign:"center", borderRadius: "3px"}} data-toggle="tooltip" data-placement="top" title="Edit">
          <MdModeEdit cursor={"pointer"} onClick={()=>{dispatch(addTaskToStore(task)); setShowAddTaskForm(true); setShowTaskCard(false); setEdit(true)}} />
           </div>
          </Col>
          <Col lg="4">
           <div style={{ border: "1px solid #999", textAlign:"center", borderRadius: "3px"}} data-toggle="tooltip" data-placement="top" title="Snooze">
             <MdNotificationAdd cursor={"pointer"} />
           </div>
          </Col>
          <Col lg="4">
          <div style={{ border: "1px solid #999", textAlign:"center", borderRadius: "3px"}} data-toggle="tooltip" data-placement="top" title="Mark as done">
           <IoMdCheckmark cursor={"pointer"} onClick={()=>handleUpdate(1)} />
           </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Card>
  )
}
