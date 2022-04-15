import React from 'react'
import Card from '../components/Card'
import Centered from '../components/Centered'
import Label from '../components/Label'
import Input from '../components/Input'
import Box from '../components/Box'
import Button from '../components/Button'

function Register() {
  return (
    <>
    <Centered>
      <div className="shadow">
      <Card className="p-4">
        <Box className="mb-10 text-center">
        <Label className="text-xl text-purple-500" title="Register" />
        </Box>
       <Box className="grid grid-cols-2 gap-2">
         <Label className="text-sm " title="First name" />
         <Label className="text-sm " title="Last Name" />
        </Box>  
       <Box className="grid grid-cols-2 gap-2">
         <Input type="email" className="mb-2" placeholder="First Name"/>  
         <Input type="email" className="mb-2" placeholder="Last Name"/>  
       </Box>
        <Label className="text-sm " title="Username" />
       <Input type="email" className="mb-2" placeholder="Username"/>

        <Label className="text-sm " title="Email" />
       <Input type="email" className="mb-2" placeholder="Your Email"/>  
       <Label className="text-sm " title="Password" />
       <Input type="password" className="mb-2" placeholder="Password"/>
       <Label className="text-sm " title="Confirm password" />
       <Input type="password" className="mb-2" placeholder="Confirm password"/>
       <Box className="my-4">
        <input type="checkbox" name="rememberme" id="rememberme" className="accent-purple-500 " /> <span className="text-sm text-purple-500">Remember me?</span>
       </Box>
        <Button className="w-full bg-purple-500 text-white hover:text-gray-700 mb-4">
          Register
        </Button>
          <Box className="flex justify-center items-center text-sm">
          <div className="">Already have account? <a href="#" className="text-blue-500 hover:text-blue-700">Login</a></div>
          </Box>
      </Card>
      </div>
    </Centered>
    </>
  )
}

export default Register
