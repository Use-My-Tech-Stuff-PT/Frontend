import React, { useState } from 'react';

export default function Login () {
    return(
        <div>
            <form className="form-signin">
                <img class="mb-1" src="https://raw.githubusercontent.com/Use-My-Tech-Stuff-PT/Marketing-Page/orlando-rivera-jr/img/Use%20My%20Tech%20Horizontal%20Logo_Teal%20Icon.png" alt="" width="auto" height="72" />
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Email: </label>
                <input 
                    type="email" 
                    id="inputEmail" 
                    class="form-control" 
                    placeholder="Email address" 
                    required="" 
                    autofocus="" />
                <br />
                <label for="inputPassword" class="sr-only">Password</label>
                <input 
                    type="password" 
                    id="inputPassword" 
                    class="form-control" 
                    placeholder="Password" 
                    required=""/>
                <div class="checkbox mb-3">
                    <label>
                        <input 
                        type="checkbox" 
                        value="remember-me"/> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p class="mt-5 mb-3 text-muted">©2020</p>
            </form>
        </div>
    )
};