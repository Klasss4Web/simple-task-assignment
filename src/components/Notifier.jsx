export const successNotifier = () => {
 return(
  <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
    <img src="" className="rounded mr-2" alt="" />
    <strong className="mr-auto">Task Assignment</strong>
    {/* <small className="text-muted">11 mins ago</small> */}
    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div className="toast-body">
    SUccess
  </div>
</div>
 )
}

export const errorNotifier = () => {
  return(
   <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
   <div className="toast-header">
     <img src="" className="rounded mr-2" alt="" />
     <strong className="mr-auto">Task Assignment</strong>
     {/* <small className="text-muted">11 mins ago</small> */}
     <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
       <span aria-hidden="true">&times;</span>
     </button>
   </div>
   <div className="toast-body">
     SOmething wwent wrong
   </div>
 </div>
  )
 }