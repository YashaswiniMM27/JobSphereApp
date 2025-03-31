import { IonContent, IonText } from "@ionic/react"
import '../styles/about.css'

function About(){
    return(
            <IonContent fullscreen className="aboutContent">
                <IonText className="aboutText">
                    At Jobsphere, we are dedicated to helping people find the right job by offering a comprehensive platform that lists a variety of job opportunities across multiple industries. Our mission is simple: to connect talented individuals with the companies that need their expertise. Whether you're a recent graduate, a seasoned professional, or someone looking to pivot careers, Jobsphere is here to guide you on your career journey. <br /> <br />
                    We understand that finding the right job can be overwhelming, which is why we've made our platform intuitive, easy to navigate, and filled with useful features that make job hunting less stressful. Our listings are updated regularly, providing you with the latest opportunities that suit your skills and preferences. Our goal is to ensure that you never miss out on a job that could be your next big step. <br /> <br />
                    But we’re not just about finding you a job – we're about finding you the right job. We pride ourselves on offering personalized job recommendations that match your skills, experiences, and aspirations. With Jobsphere, you have access to not only job listings but also insightful resources that help you with your resume, cover letter, and interview preparation. <br /> <br />
                    We are continuously expanding and improving our platform to provide you with an even better experience. At Jobsphere, we're more than just a job board – we're your partner in building a successful career. Let us help you take the next step toward your future. <br /> <br />
                </IonText>
            </IonContent>
    )
}

export default About