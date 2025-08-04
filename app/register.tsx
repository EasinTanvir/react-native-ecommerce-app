import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { apiInstance } from "@/apiInstance/api";

import { Link, useRouter } from "expo-router";
import Toast from "react-native-toast-message";

type LoginData = {
  email: string;
  password: string;
};

const Register = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (data: LoginData) => {
    try {
      setLoading(true);
      const { data: res } = await apiInstance.post("/api/register", data);
      Toast.show({
        type: "success",
        text1: res.message || "Success",
      });
      router.push("/login");
    } catch (err: any) {
      if (err?.response?.data?.email) {
        setError("email", { message: err.response.data.email });
      } else {
        Toast.show({
          type: "error",
          text1: "Internal Server error",
        });
      }

      console.error("register ERror", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      className="flex-1 flex  items-center justify-center mx-4 "
    >
      <View className="bg-white px-6 py-10 justify-center h-fit  w-full max-w-[450px]  rounded-lg ">
        <Text className="text-2xl font-bold text-center text-gray-800">
          Register Here
        </Text>
        <Text className="text-center text-gray-500 mb-5">
          Enter your credentials to Login
        </Text>

        {/* Google login */}
        <TouchableOpacity className="flex-row items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg mb-6">
          {/* <Icon name="google" size={20} color="#EA4335" /> */}
          <Text className="font-semibold text-gray-700">Login with Google</Text>
        </TouchableOpacity>
        {/* Username Field */}
        <Controller
          control={control}
          name="username"
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                className={`border rounded-md px-3 py-3 text-gray-800 ${
                  errors.username ? "border-red-500" : "border-gray-400"
                }`}
                placeholder="Enter your username"
                placeholderTextColor="black"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
              />
              {errors.username && (
                <Text className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </Text>
              )}
            </>
          )}
        />
        {/* Email Field */}
        <Controller
          control={control}
          name="email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                className={`border rounded-md px-3 py-3 text-gray-800 mt-4 ${
                  errors.email ? "border-red-500" : "border-gray-400"
                }`}
                placeholder="Enter your email"
                keyboardType="email-address"
                placeholderTextColor="black"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
              />
              {errors.email && (
                <Text className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </Text>
              )}
            </>
          )}
        />

        {/* Password Field */}
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters required",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                className={`border rounded-md px-3 py-3 mt-4 text-gray-800 ${
                  errors.password ? "border-red-500" : "border-gray-400"
                }`}
                placeholder="Enter your password"
                placeholderTextColor="black"
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
              {errors.password && (
                <Text className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </Text>
              )}
            </>
          )}
        />

        {/* Submit Button */}
        <TouchableOpacity
          className="bg-brandColor mt-6 py-3 rounded-md"
          onPress={handleSubmit(onSubmit)}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white font-semibold text-center">
              Register
            </Text>
          )}
        </TouchableOpacity>

        {/* Register Link */}
        <Text className="text-center text-sm text-gray-700 mt-4">
          Already Have An Account?
          <Link
            href="/login"
            className="text-brandColor font-semibold underline"
          >
            LogIn
          </Link>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
