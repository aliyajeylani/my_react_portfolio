import React from 'react'
import PageContent from './PageContent'
import Home from './Home'
import Form from './Form'
import Resume from './Resume'
import Portfolio from './Portfolio'



const Page = ({currentPage}) => {

    const renderPage = () => {

        switch(currentPage.name) {
            case "Home":
                return <Home />
            case "Portfolio":
                return <Portfolio />
            case "Form":
                return <Form />
            case "Resume":
                return <Resume/>

            default: 
            return <Home />
        }
    }

  return (
    <div>
      <h2>{currentPage.name}</h2>
      <PageContent>{renderPage()}</PageContent>
    </div>
  )
}

export default Page
