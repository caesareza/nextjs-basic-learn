import MetaHead from "@/components/MetaHead";
import { useState } from "react";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { registerUser } from "@/store/authSlice";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()

    const onSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)

        // Read the form data
        const form = event.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());

        const { username, password } = formJson

        const userLogin = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
                // expiresInMins: 60, // optional
            })
        })

        const user = await userLogin.json()
        console.log('user', user)

        dispatch(registerUser(user))

        setIsLoading(false)

        router.push("/")

        // username: 'kminchelle',
        // password: '0lelplR',

    }

    return (
        <section>
            <MetaHead
                title="Login"
                description="Ini adalah halaman Login"
                image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/nike.svg`}
                url={`${process.env.NEXT_PUBLIC_HOST_NAME}/contact-us`}
            />
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Login</h2>
                    <form onSubmit={onSubmit}>
                        <div class="mb-6">
                            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input type="username" id="username" name="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" id="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <button
                            type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Logging In ..' : 'Submit'}
                        </button>
                    </form>
                </div>
            </section>
        </section >
    )
}
