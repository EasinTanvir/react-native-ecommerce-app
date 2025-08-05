import Header from "@/components/Header";
import QueryProvider from "@/providers/QueryProvider";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";
import "./global.css";

const LayoutWrapper = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen
          name="login"
          options={{
            presentation: "formSheet",
            sheetInitialDetentIndex: 0,
            sheetGrabberVisible: true,
            contentStyle: {
              backgroundColor: "#fff",
            },

            header: () => <Header isAuth />,
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            header: () => <Header />,
          }}
        />
      </Stack>
      <Toast position="top" />
    </>
  );
};

export default function RootLayout() {
  return (
    <QueryProvider>
      <LayoutWrapper />
    </QueryProvider>
  );
}
