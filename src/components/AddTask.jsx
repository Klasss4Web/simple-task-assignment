import React, { useEffect, useState } from 'react'
import { Col,  Form, FormControl, InputGroup, Row, Button, Spinner } from 'react-bootstrap'
import { AiOutlinePlus } from "react-icons/ai"
import { BiTask, BiTimeFive } from "react-icons/bi"
import { MdOutlineDateRange, MdDeleteForever } from "react-icons/md"
import { addTask } from '../pages/homePage/services/addTask'
import { useSelector } from 'react-redux'
import { addTaskToStore } from '../features/authUserSlice'
import { convertTimeToSeconds, toTime } from '../utils'
import { updateTask } from '../pages/homePage/services/editTask'
import { deleteTask } from '../pages/homePage/services/deleteTask'
import { TaskCard } from './TaskCard'
import dayjs from 'dayjs'

export const AddTask = ({ times, assignedUser, setRefresh, totalTask=[] }) => {
  const taskMsg = useSelector(state=>state.user.taskToDisplay?.task_msg)
  const taskDate = useSelector(state=>state.user.taskToDisplay?.task_date)
  const taskTime = useSelector(state=>state.user.taskToDisplay?.task_time)
  const taskId = useSelector(state=>state.user.taskToDisplay?.id)
  const taskAssigneeName = useSelector(state=>state.user.taskToDisplay?.assigned_user)
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [date, setDate] = useState("")
  const [showAddTaskForm, setShowAddTaskForm] = useState(false)
  const [showTaskCard, setShowTaskCard] = useState(true)
  const [user, setUser] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")
  const company_id = useSelector(state=>state.user.userData?.company_id)
  const [edit, setEdit] = useState(false)
  const user_id = "lead_465c14d0e99e4972b6b21ffecf3dd691"
  const updatedname = assignedUser?.find(assignee => assignee?.id === taskAssigneeName)?.name


 useEffect(()=>{
   setDescription(taskMsg)
   setDate(taskDate)
   setUser(taskAssigneeName)
   setTime(toTime(taskTime))
 },[taskMsg, taskDate, taskAssigneeName, taskTime])

  const handleSubmit = async (isCompleted) => {
    // e.preventDefault()
    setLoading(true)
    const payload = {
      assigned_user: user,
      task_date: date,
      task_time: convertTimeToSeconds(time),
      is_completed: isCompleted,
      time_zone: 19800,
      task_msg: description
    }
    setDisabled(disabled)

    !edit ? await addTask(payload, user_id, company_id, setLoading, setRefresh, setShowTaskCard, setShowAddTaskForm) : await updateTask(payload, user_id, company_id, taskId, setLoading, setRefresh, setShowTaskCard, setShowAddTaskForm)
  }

  const handleDelete = () => {
    deleteTask(user_id, company_id, taskId, setLoading, setRefresh, setShowTaskCard, setShowAddTaskForm)
  }

  const newTask = () => {
    setUser("")
    setDate("")
    setTime("")
    setDescription("")
    setEdit(false)
  }


  return (
    <div>
      <InputGroup className="w-100 mt-3">
       
       <FormControl
         placeholder={`TASKS ${totalTask?.length || "--"}`}
         aria-label="Username"
         aria-describedby="basic-addon1"
         disabled
       />
       <InputGroup.Text id="basic-addon1">
        <AiOutlinePlus cursor={"pointer"} size={26} onClick={()=>{setShowAddTaskForm(true); setShowTaskCard(false); newTask()}} />
       </InputGroup.Text>
     </InputGroup>
    { (totalTask && showTaskCard) &&
    // Sort the task data to allow the most recent one appear at the top
      totalTask?.sort((a, b) => convertTimeToSeconds(dayjs(b.created).format("hh:mm")) - convertTimeToSeconds(dayjs(a.created).format("hh:mm")))?.map((task) => {
        return(
          <TaskCard task={task} key={task?.id} setShowTaskCard={setShowTaskCard} setEdit={setEdit}      addTaskToStore={addTaskToStore} setShowAddTaskForm={setShowAddTaskForm} handleUpdate={handleSubmit} />
        )
      })
   }
      
        {
          showAddTaskForm &&
          <Col lg="12" className="add-task p-3">
          <Form className="mt-2">
          <Form.Label htmlFor="task description">Task Description</Form.Label>
          <InputGroup className="mb-3">
       
            <FormControl
              placeholder="Enter task description"
              aria-label="Enter task description"
              aria-describedby="basic-addon1"
              disabled={disabled}
              value={description}
              onChange={e=>setDescription(e.target.value)}
            />
            <InputGroup.Text id="basic-addon1" style={{ background: "#fff"}}>
              <BiTask />
            </InputGroup.Text>
          </InputGroup>
         

          <Row>
            <Col lg="6">
              <Form.Label htmlFor="date">Date</Form.Label>
              <InputGroup className="mb-3">
              <InputGroup.Text id="date" style={{ background: "#fff"}}>
                  <MdOutlineDateRange />
                </InputGroup.Text>
                <FormControl
                  placeholder="date"
                  aria-label="date"
                  aria-describedby="date"           
                  type="date"
                  min={dayjs(Date.now()).format("YYYY-MM-DD")}
                  data-date-format="YYYY DD MMMM"
                  disabled={disabled}
                  value={date}
                  onChange={(e)=>setDate(e.target.value)}
                />
                
              </InputGroup>
            </Col>
            <Col lg="6">
              <Form.Label htmlFor="time">Time</Form.Label>
              
              <InputGroup className="mb-3">
              <InputGroup.Text id="time" style={{ background: "#fff"}}>
                  <BiTimeFive />
                </InputGroup.Text>
                <select className="" disabled={disabled}  style={{height: "38px", width: "70%", border: "1px solid #c4c4c4", background: "#fff"}} onChange={(e)=>setTime(e.target.value)}>
                  <option>{dayjs(time).format("hh:mm a")}</option>
                {
                  times?.map((time, i)=> {
                    return(
                      <option value={time?.value} key={i}>{time?.time}</option>
                    )
                  })
                }
              </select>
                
              </InputGroup>
            </Col>
        </Row>
        <Form.Label htmlFor="task description" className="">Assign User</Form.Label>
        <br />
          <select disabled={disabled} style={{ width: "100%", height: "35px", border: "1px solid #c4c4c4", marginBottom: "20px", background: "#fff"}} placeholder="Select assignee" onChange={(e)=>setUser(e.target.value)}>
            <option selected>{updatedname || "Please select an assignee"}</option>
          {
                assignedUser?.map((data, i) => {
                return(
                  <option key={i} value={data?.id}>{data?.name}
                  </option>           
                ) 
              })
            }
          </select>
          
         <Row className={taskMsg  ? "justify-content-between" : "justify-content-end"}>
          {taskMsg &&
           <Col>
              <MdDeleteForever size={26} cursor={"pointer"} onClick={()=>handleDelete()}/>
           </Col>
           }
          
           <Col lg="6">
             <Row>
               <Col>
                <Button className="btn btn-cancel" onClick={()=>{setShowAddTaskForm(false); setShowTaskCard(true)}}>Cancel</Button>
                </Col>
                <Col>
                <Button className="btn btn-save" onClick={()=>handleSubmit(0)}
                 disabled={!date || !time || !user || !description}>
                {loading ? (<Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                 
                  />): "Save" }
                </Button>
               </Col>
             </Row>
            
           </Col>
         
         </Row>
        </Form>
        </Col>
        }
    </div>
  )
}
