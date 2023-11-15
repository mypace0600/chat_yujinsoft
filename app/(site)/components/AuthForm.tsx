'use client';

import Input from "@/app/components/Input/input";
import { useCallback, useState } from "react";
import { FieldValue, FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER';
const AuthForm = () =>{
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [loading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(()=>{
        if(variant === 'LOGIN'){
            setVariant("REGISTER");
        } else {
            setVariant("LOGIN");
        }
    },[variant]);

    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit : SubmitHandler<FieldValues>  = (data) => {
        setIsLoading(true);
        if(variant === 'REGISTER'){
            //axios Register
        }

        if(variant === 'LOGIN'){
            // nextauth sign in
        }
    }

    const socialAction = (action: string) =>{
        setIsLoading(true);
        // nextauth social sign in

    }

    return (
        <div
            className="
                mt-8
                sm:mx-auto
                sm:w-full
                sm:max-w-md
            "
        >
            <div
                className="
                    bg-white
                    px-4
                    py-8
                    shadow
                    sm:round-lg
                    sm:px-10
                "
            >
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input />

                </form>
            </div>
        </div>
    );
}

export default AuthForm;