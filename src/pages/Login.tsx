import React from 'react'
import Card from '../components/Card'
import Centered from '../components/Centered'
import Label from '../components/Label'
import Input from '../components/Input'
import Box from '../components/Box'
import RadioGroup from '../components/RadioGroup'
import RadioItem from '../components/RadioItem'
import Button from '../components/Button'

function Login() {
  return (
    <>
    <Centered>
      <div className="shadow">
      <Card className="w-80 ">
        <Box className="mb-10 text-center">
        <Label className="text-xl text-purple-500" title="Login" />
        </Box>
       <Input type="email" className="mb-3" placeholder="Your Email"/>  
       <Input type="password" placeholder="Password"/>
       <Box className="my-4">
        <input type="checkbox" name="rememberme" id="rememberme" className="accent-purple-500 " /> <span className="text-sm text-purple-500">Remember me?</span>
       </Box>
        <Button className="w-full bg-purple-500 text-white hover:text-gray-700 mb-4">
          Login
        </Button>
          <Box className="flex justify-center items-center text-sm">
          <div className="">don't have account? <a href="#" className="text-blue-500 hover:text-blue-700">register now</a></div>
          </Box>
      </Card>
      </div>
    </Centered>
    </>
  )
}

export default Login
