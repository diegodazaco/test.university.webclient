import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            <h1>Bienvenido al Panel de Administración</h1>
            <Outlet /> {}
        </div>
    );
};

export default AdminLayout;
