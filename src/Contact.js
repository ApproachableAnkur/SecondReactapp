import React from 'react';
import  {Container,Row,Form,FormGroup,FormControl,Button} from "react-bootstrap";
class Contact extends React.Component
{
  constructor()
  {
    super();
    this.state={nam:"",namerror:"",emai:"",locati:""}
  }
  submit(){
    this.setState({namerror:""});
     alert("data has been submitted sucessfully");
  }
  render()
  {
    return(
      <div>
        <Container>
          <Row>
            <Form>
              <h2>RegistrationForm</h2>
              <br/>
              <FormGroup>
              <Form.Control className='w-50' type="text" name="nam" placeholder="Enter Your Name" onChange={(event)=>{this.setState({nam:event.target.value})}}/>
              <p style={{color:"red",fontSize:"14px"}}>{this.state.namerror}</p>
              </FormGroup><br/>
              <FormGroup>
              <Form.Control className='w-50' type="text" name="emai" placeholder="Enter Your Email" onChange={(event)=>{this.setState({emai:event.target.value})}} />
              </FormGroup><br/>
              <FormGroup>
              <Form.Control className='w-50' type="text" name="locati" placeholder="Enter Your Location" onChange={(event)=>{this.setState({locati:event.target.value})}} />
              </FormGroup><br/>
              <Button onClick={()=>this.submit()}>Submit</Button>
            </Form>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Contact