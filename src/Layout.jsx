import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import NavBar from "./components/NavBar";

export default function Layout() {
  return (
    <>
        <Suspense fallback>
            <NavBar/>
        </Suspense>

        <div className="flex flex-col">
                <main className="flex-1">
                    <div className="py-6">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-14">
                            <Suspense>
                                <Outlet />
                            </Suspense>
                        </div>
                    </div>
                </main>
            </div>
    </>
  )
}
