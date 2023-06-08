import React from 'react'
import ProfileComponent from './profileComponent'

export default function UserProfile() {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='h-5/6 w-full md:w-5/6 bg-blue-50 opacity-80 rounded-lg' data-aos="fade-down">
            <h3 className='underline underline-offset-1 text-center my-10 text-3xl font-bold uppercase'>MD Abdullah</h3>


            <ProfileComponent name='email' value='abdullah.dev.it@gmail.com'/>

            <ProfileComponent name='session' value='2020 - 2021'/>

            <ProfileComponent name='department' value='CMT'/>

            <ProfileComponent name='semester' value='5th'/>

            <ProfileComponent name='shift' value='2nd'/>

            <ProfileComponent name='roll' value='571082'/>

            <ProfileComponent name='registration' value='1502140812'/>
        </div>
    </div>
  )
}
