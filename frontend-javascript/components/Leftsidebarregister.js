//import Sider from "antd/es/layout/Sider";
import {Layout, Menu} from "antd";
import {useRouter} from "next/router";
import {
    AppstoreOutlined, AuditOutlined,
    BarChartOutlined, ClockCircleOutlined,
    CloudOutlined,
    FontColorsOutlined,
    LoginOutlined,
    LogoutOutlined,
    ShopOutlined,
    SolutionOutlined, StopFilled,
    StopOutlined,
    TeamOutlined,
    UploadOutlined, UserAddOutlined,
    UserOutlined,
    HomeFilled,
    VideoCameraOutlined
} from "@ant-design/icons";

const {Sider} = Layout;


export default function Leftsidebarregister() {

    const router =  useRouter();

   /* async function logout() {
        // console.log("logout started");

        await fetch("http://localhost:3000/adminLogOut", {
            method: "GET",
            withCredentials: true,
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

        await router.push("/");
    }
    /// */


    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>              
                <Menu.Item key="1" icon={<HomeFilled />} onClick={()=> router.push('/')}>
                    Home
                </Menu.Item>

                <Menu.Item key="2" icon={<BarChartOutlined/>}onClick={()=> router.push('/electionresultsguest')}>
                    See Results
                </Menu.Item>

              

            </Menu>
        </Sider>
        </Layout>
    )
}