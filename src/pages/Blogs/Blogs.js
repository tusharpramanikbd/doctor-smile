import React from 'react'
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='container blogs-container'>
      <h2 className='mt-5'>
        Difference between authorization and authentication?
      </h2>
      <p>
        Authentication is the process of verifying who someone is, whereas
        authorization is the process of verifying what specific applications,
        files, and data a user has access to. Authentication works through
        passwords, one-time pins, biometric information, and other information
        provided or entered by the user. Authorization works through settings
        that are implemented and maintained by the organization. Authentication
        is the first step of a good identity and access management process.
        Authorization always takes place after authentication.
      </p>

      <h2 className='mt-5'>
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h2>
      <p>
        Firebase, Backend-as-a-Service (BaaS), is a platform by Google that
        provides functionalities and helps with the backend development of your
        Android, iOS, or web and even some products that support Unity3D too. It
        has many incredible features like authentication, realtime database,
        analytics, cloud storage, cloud messaging,etc. So that the developers do
        not need to create them from scratch.
      </p>
      <p>
        There are some other third party authentication service provider. Like,
      </p>
      <ul>
        <li>Stytch</li>
        <li>Ory</li>
        <li>Supabase</li>
        <li>Okta</li>
        <li>PingIdentity</li>
        <li>Keycloak</li>
      </ul>

      <h2 className='mt-5'>
        What other services does firebase provide other than authentication?
      </h2>
      <p>
        There are many services available that firebase provides other than
        authentication. Like,
      </p>
      <ul>
        <li>Realtime Database</li>
        <li>Google Analytics</li>
        <li>Cloud Storage</li>
        <li>Cloud Messaging</li>
        <li>Hosting</li>
        <li>Predictions</li>
        <li>Dynamic Links</li>
        <li>Remote Config</li>
      </ul>
    </div>
  )
}

export default Blogs
