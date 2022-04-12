import styles from '../App.module.css'
import { createSignal, createEffect } from 'solid-js';
import Cookies from 'js-cookie'


function Home() {
    const [step, setStep] = createSignal(0);
    const [loading, setLoading] = createSignal(false);
    const [user, setUser] = createSignal("Let us recognize you")
    const [whyModal, setWhyModal] = createSignal(false)

    function prevStep() {
        let s = step() - 1
        setStep(s)
        console.log(step())
    }

    function nextStep() {
        let s = step() + 1
        setStep(s)
        console.log(step())
    }

    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload)
    }

    async function accountCreator(gid) {
        const loginAddr = "https://control.prelude.cc/login"
        const reqBody = {
            "gid": gid
        }
        const resp = await fetch(loginAddr, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody)
        })
        const jwt = await resp.json()
        // console.log(jwt)
        // const jwtObj = JSON.parse(jwt)
        return jwt
    }

    function googleLoginHandler(creds) {
        setLoading(true)
        let result = parseJwt(creds.credential)
        const google_id = result.sub
        const google_name = result.name
        Cookies.set('google_id', google_id)
        Cookies.set('google_name', google_name)
        accountCreator(google_id)
            .then(data => {
                const resp = JSON.parse(data)
                console.log(resp)
                if (resp.code == 0) {
                    setUser("Welcome back, " + google_name + "!")
                } else if (resp.code == 1) {
                    setUser("Welcome join us, " + google_name + "!")
                }
                setStep(2)
                setLoading(false)
            })
    }

    function googleLoginBtn() {
        google.accounts.id.initialize({
            client_id: "934272751254-hdrod6b4ssep8plavq46fansmkv51lhs.apps.googleusercontent.com",
            callback: googleLoginHandler
        });
        google.accounts.id.renderButton(
            document.getElementById("google_login_btn"),
            { theme: "outline", size: "large" }
        );
    }

    createEffect(() => {
        setLoading(true)
        const google_id = Cookies.get('google_id')
        const google_name = Cookies.get('google_name')
        const notion_token = Cookies.get('np_token')
        if (google_id == null) {
            console.log("no google id")
            googleLoginBtn()
            setStep(1)
            setLoading(false)
        } else {
            // TODO: need to verify current google id 
            if (notion_token == null) {
                console.log("no notion token")
                setUser("Welcome back, " + google_name + "!")
                setStep(2)
                setLoading(false)
            }
        }

    })

    return (
        <div>
            <div class={styles.masterhead} >
                <h1 class={styles.title}>NotionPaper</h1>
                <p class={styles.subtitle}>Turn your Notion pages to a static site.</p>
            </div>
            <button onClick={prevStep}>PREV </button>
            <button onClick={nextStep}>NEXT </button>
            <div class="ui container">
                <div class="ui grid">
                    <div class="five wide column">
                        <div class="ui fluid ordered vertical steps">
                            <div classList={{ active: step() == 1, completed: step() > 1, step: true }}>
                                <div class="content">
                                    <div class="title">Login</div>
                                    <div class="description">{user}</div>
                                </div>
                            </div>
                            <div classList={{ active: step() == 2, completed: step() > 2, step: true }}>
                                <div class="content">
                                    <div class="title">Prepare</div>
                                    <div class="description">Get your Notion Database done</div>
                                </div>
                            </div>
                            <div classList={{ active: step() == 3, completed: step() > 3, step: true }}>
                                <div class="content">
                                    <div class="title">Authorize</div>
                                    <div class="description">Let us access to your database</div>
                                </div>
                            </div>
                            <div classList={{ active: step() == 4, completed: step() > 4, step: true }}>
                                <div class="content">
                                    <div class="title">Download</div>
                                    <div class="description">Download the site</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="eleven wide column">
                        <div classList={{ active: loading(), ui: true, dimmer: true }}>
                            <div class="ui loader"></div>
                        </div>
                        {/* Step 1 content area */}
                        <div classList={{ hidden: step() != 1 }}>
                            <p>Please use the button below to sign in our service <a href='#'  onClick={ ()=>{setWhyModal(true)}}> Why?</a></p>
                            <div classList={{ ui: true, mini: true, modal: true, active: whyModal() }}>
                                <div class="header">Why do I need to login?</div>
                                <div class="content">
                                    <p>I hate login, seriously. But I need to recognize you so I don't need to ask Notion for your permission again and again.</p>
                                    <p>To minimize the interruption, I used Google Signin service. Which means, I don't need to know your mail address, password, etc.. I only keep three things from you:</p>
                                    <p>1. A encrypted string from Google to know who you are ;</p>
                                    <p>2. Your name from Google;</p>
                                    <p>3. A encrypted string to know you gave me your permission from Notion</p>
                                </div>
                                <div class="actions">
                                    <div class="ui approve button" onClick={ ()=>{setWhyModal(false)} }>OK!</div>
                                </div>
                            </div>
                            <div id='google_login_btn' ></div>
                        </div>
                        {/* Step 2 content area */}
                        <div classList={{ hidden: step() != 2 }}>
                            <button class='ui primary button' onClick={nextStep}>Done!</button>
                        </div>
                        {/* Step 3 content area */}
                        <div classList={{ hidden: step() != 3 }}>
                            <a target="view_window"
                                href="https://api.notion.com/v1/oauth/authorize?owner=user&client_id=9d297c54-4381-4438-88ae-58b0f55b310e&redirect_uri=https://notionpaper.prelude.cc/auth&response_type=code"
                                // href="https://api.notion.com/v1/oauth/authorize?owner=user&client_id=9d297c54-4381-4438-88ae-58b0f55b310e&redirect_uri=http://localhost:3000/auth&response_type=code"
class="ui primary button">Click here to authorize</a>
                        </div>
                        {/* Step 4 content area */}
                        <div classList={{ hidden: step() < 4 }}>
                            step 4 content
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home