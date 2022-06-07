// import React from 'react'
import "./homePage.css"
import { Col, Row } from "react-bootstrap"
import { AddTask } from "../../components/AddTask"
import { NavBar } from "../../components/NavBar"
import { SideBar } from "../../components/SideBar"
import { timeData } from "../../components/timeData"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getAssigtnedUser } from "./services/getAssignedUser"
import { getAllTask } from "./services/getAllTask"
import { FullPageLoader } from "../../components/fullPageLoader"

export const HomePage = () => {

  const [assignedUser, setAssignedUser] = useState([])
  const [allTask, setAllTask] = useState([])
  const [loading, setLoading] = useState(true)
  const company_id = useSelector(state=>state.user.userData?.company_id)
  const [refresh, setRefresh] = useState(false)

  const user_id = "lead_465c14d0e99e4972b6b21ffecf3dd691"
  const state = useSelector(state=>state)

  console.log("state", state, "assigned-user", assignedUser, company_id, "allTask", allTask)

  useEffect(() => {
    getAssigtnedUser(company_id, setLoading, setAssignedUser)
    getAllTask(company_id, user_id, setLoading, setAllTask )
  },[company_id, user_id, refresh])

  return loading ? (
    <FullPageLoader />
  ) : (
    // <div>
      <Row style={{ width: "100%", height: "100vh", overflowY: "scroll"}}>
        <Col xs lg="3">
          <SideBar />
        </Col>
        <Col xs lg="9" style={{ height: "100vh", overflowY: "scroll"}}>
        <NavBar />
        <Row>
          <Col lg="6">
           <AddTask times={timeData} assignedUser={assignedUser} setRefresh={setRefresh} totalTask={allTask} />
          </Col>
        </Row>
       
        </Col>
      </Row>
    // </div>
  )
}
