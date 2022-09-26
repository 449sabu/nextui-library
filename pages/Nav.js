import NextLink from 'next/link';
import { 
    Navbar, 
    Link, 
    Text,
    Button,
} from "@nextui-org/react";
import { AcmeLogo } from "../public/AcmeLogo";


export default function Nav() {
    return (
        <Navbar isBordered variant="sticky">
            <Navbar.Brand>
                <AcmeLogo />
                <Text b color="inherit" hideIn="xs">CIEL</Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" activeColor="success" variant="highlight-solid">
                <NextLink href="/">
                    <Link block color="secondary">HOME</Link>
                </NextLink>
                <NextLink href="/blog">
                    <Link block color="secondary">BLOG</Link>
                </NextLink>
                <NextLink href="/data">
                    <Link block color="secondary">DATA</Link>
                </NextLink>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Button auto color="gradient">Connect Wallet</Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    );
  }