import React from 'react'


const Contact = () => {
  return(
   
    <aside id="contact">
    <a href="#">
      <i class="far fa-arrow-alt-circle-up"></i>
    </a>

    <header>
      <h2>Contact Me</h2>
      <p>Please feel free to send me some feedback</p>
    </header>

    <form action="#" method="post">

      <div class="form-field">
        <label for="user_name">Name</label> <br></br>
        <input type="text" name="user_name" required=""/>
      </div>

      <div class="form-field">
        <label for="user_email">Email</label> <br></br>
        <input type="email" name="user_email" required=""/>
      </div>

      <div class="form-field">
        <textarea name="message"></textarea>
      </div>
     <button type="submit">Submit</button> 
      <input type="submit" value="Contact me! 😃"/>

    </form>
  </aside>
   
  )
}

export default Contact