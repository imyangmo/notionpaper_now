import { createSignal, createEffect } from 'solid-js';
import Cookies from 'js-cookie'

function Auth(){

    const [status, setStatus] = createSignal(0)

    const statusMsg = {
        0: "Please hold",
        1: "Waiting authorization from Notion... This may takes seconds",
        2: "Invalid URL, please close this window"
    }

    async function notionAuth(code) {
        console.log(code)
        const notionAuthAddr = "https://control.prelude.cc/auth"
        let reqBody = {
            "code": code
        }
        const resp = await fetch(notionAuthAddr, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reqBody)
        })
        const jwt = await resp.json()
        return jwt
    }

    createEffect(()=> {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const code = urlParams.get('code')
        // console.log(code)
        if (code == null) {
            setStatus(2)
        } else {
            setStatus(1)
            notionAuth(code)
                .then(
                    data => {
                        console.log(data)
                    }
                )

        }
    })
    return (
        <div>
            {statusMsg[status()]}
        </div>
    )
}

export default Auth