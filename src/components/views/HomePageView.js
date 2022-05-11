/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
const HomePageView = () => {
  // Render Home page view
  return (
    <div >
      <h1>Home Page</h1>
      <p>Current Bugs: </p>
      <p>User needs to refresh page for All Campus when deleting</p>
      <p>User needs to submit twice for Editing Campus.</p>
    </div>
  );    
}

export default HomePageView;