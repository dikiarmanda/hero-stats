"use client";
import { Button, Navbar, DarkThemeToggle, Flowbite } from "flowbite-react";

export default function NavbarWithCTAButton() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                {/* <img
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="/favicon.svg"
                /> */}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Hero Stats
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Flowbite>
                    <DarkThemeToggle />
                </Flowbite>
                <Button>Get started</Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active href="#">
                    <p>Picks</p>
                </Navbar.Link>
                <Navbar.Link href="#">Bans</Navbar.Link>
                <Navbar.Link href="#">Win Rate</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
