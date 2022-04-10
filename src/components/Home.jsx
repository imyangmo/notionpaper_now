import styles from '../App.module.css'
import { createSignal, createEffect } from 'solid-js';


function Home() {
    const [step, setStep] = createSignal(0);

    function googleLoginHandler(creds) {
        document.getElementById('contentLoader').classList.add("active")
        result = parseJwt(creds.credential)
        const google_id = result.sub
        const google_name = result.name
        accountCreator(google_id)
            .then(data => {
                console.log(data)
            })
    }

    createEffect(() => {
        google.accounts.id.initialize({
            client_id: "934272751254-hdrod6b4ssep8plavq46fansmkv51lhs.apps.googleusercontent.com",
            callback: googleLoginHandler
        });
        google.accounts.id.renderButton(
            document.getElementById("google_login_btn"),
            { theme: "outline", size: "large" }
        );

    })

    return (
        <div>
            <div class={styles.masterhead} >
                <h1 class={styles.title}>NotionPaper</h1>
                <p class={styles.subtitle}>Turn your Notion pages to a static site.</p>
            </div>
            <div class="ui container">
                <div class="ui grid">
                    <div class="five wide column">

                        <div class="ui fluid ordered vertical steps">
                            <div id="step1Menu" class="active step">
                                <div class="content">
                                    <div class="title">Login</div>
                                    <div class="description">Let us recognize you</div>
                                </div>
                            </div>
                            <div id="step2Menu" class="step">
                                <div class="content">
                                    <div class="title">Prepare</div>
                                    <div class="description">Get your Notion Database done</div>
                                </div>
                            </div>
                            <div id="step3Menu" class="step">
                                <div class="content">
                                    <div class="title">Authorize</div>
                                    <div class="description">Let us access to your database</div>
                                </div>
                            </div>
                            <div id="step4Menu" class="step">
                                <div class="content">
                                    <div class="title">Download</div>
                                    <div class="description">Download the site</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="eleven wide column">
                        <div id="contentLoader" class="ui dimmer">
                            <div class="ui loader"></div>
                        </div>
                        <div id="step1Content">
                            <p>Please use the button below to sign in our service</p>
                            <div id='google_login_btn' ></div>
                        </div>

                        <div id="step2Content" style="display: none;">

                        </div>

                        <div id="step3Content" style="display: none;">

                        </div>

                        <div id="step4Content" style="display: none;">

                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home