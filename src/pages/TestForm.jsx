import { useState } from "react";
import { useForm } from "react-hook-form";

const TestForm = () => {
	const defaultValues = {
		name: "shio",
		email: "shio@gmail.com",
		gender: "male",
		memo: "",
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues,
	});

	const onsubmit = (data) => console.log(data);
	const onerror = (err) => console.log(err);

	return (
		<>
			<form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
				<div>
					<label htmlFor="name">名前:</label>
					<input
						type="text"
						id="name"
						{...register("name", {
							required: "名前は必須入力です",
							maxLength: {
								value: 20,
								message: "名前は20文字以内にしてください。",
							},
						})}
					/>
					<div>{errors.name?.message}</div>
				</div>
				<div>
					<label htmlFor="gender">性別:</label>
					<label>
						<input
							type="radio"
							value="male"
							{...register("gender", {
								required: "性別は必須です",
							})}
						/>
						男性
					</label>
					<label>
						<input
							type="radio"
							value="female"
							{...register("gender", {
								required: "性別は必須です",
							})}
						/>
						女性
					</label>
          <div>{errors.gender?.message}</div>
				</div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id='email'
          {...register('email',{
            required: 'メールアドレスは必須入力です',
            pattern: {
              value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
              message: 'メールアドレスの形式が不正です',
            }
          })}  />
          <div>{errors.email?.message}</div>
        </div>
        <div>
          <button type='submit'>送信</button>
        </div>
			</form>
		</>
	);
};

const Button = () => {
  
}

export default TestForm;
