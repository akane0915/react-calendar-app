var AppointmentForm = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Make a New Appointment</h3>
        <form>
          <input name='title' placeholder='Appointment Title' />
          <input name='appt_time' placeholder='Appointment Time' />
          <input type='submit' value='Make Appointment' />
        </form>
      </div>
    )
  }
});
