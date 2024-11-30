import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProjectDashboard from './ProjectDashboard/ProjectDashboard';
import ProjectHeader from './ProjectHeader/ProjectHeader';
import ProjectSidebar from './ProjectSidebar/ProjectSidebar';
import LoginPage from './Login/LoginPage/LoginPage';
import ProjectAdd from './ProjectAdd/ProjectAdd';
import ProjectClient from './ProjectClient/ProjectClient';
import ProjectTeam from './ProjectTeam/ProjectTeam';
import ProjectTask from './ProjectTask/ProjectTask';
import ProjectInnerPage from './ProjectAdd/ProjectInnerPage/ProjectInnerPage';
import AddUser from './RolesPermission/AddUser/AddUser';
import AddRole from './RolesPermission/AddUser/AddRole';

const ProjectManagementRoutes = () => {
    const location = useLocation();
    const isLoginpage = location.pathname === "/login";
    const [closed, setClosed] = useState(true);
    const sidebarToggle = () => {
        setClosed(!closed);
    };

    return (
        <section style={{ height: "100vh", display: "flex" }}>
            {!isLoginpage && (
                <div className={`sidebar ${closed ? "sidebar-closed" : "sidebar-open"}`}>
                    <ProjectSidebar closed={closed} />
                </div>
            )}
            <div className={`content ${isLoginpage ? "content-full" : closed ? "content-closed" : "content-open"}`} style={{ overflowY: "auto" }}>
                {!isLoginpage && <ProjectHeader sidbarclose={sidebarToggle} />}
                <Routes>
                    <Route path="/" element={<ProjectDashboard />} />
                    <Route path="/add-user" element={<AddUser />} />
                    <Route path="/add-role" element={<AddRole />} />
                    <Route path="/project-client" element={<ProjectClient />} />
                    <Route path="/project-add" element={<ProjectAdd />} />
                    <Route path="/project-team" element={<ProjectTeam />} />
                    <Route path="/project-task" element={<ProjectTask />} />
                    <Route path="/project-inner" element={<ProjectInnerPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </section>
    );
};

export default ProjectManagementRoutes;
