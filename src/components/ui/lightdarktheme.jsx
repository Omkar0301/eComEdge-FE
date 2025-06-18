"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleThemeMode } from "@/redux/actions/uiActions";

export function useThemeToggle() {
  const theme = useSelector((state) => state.ui.themeMode);
  const dispatch = useDispatch();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (!theme) {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (prefersDark) {
          dispatch(toggleThemeMode());
        }
      }
    }
  }, [isMounted, theme, dispatch]);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [isMounted, theme]);

  const toggleTheme = () => {
    dispatch(toggleThemeMode());
  };

  return [isMounted ? theme : null, toggleTheme];
}
