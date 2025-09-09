import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, GalleryHorizontal, FileText, MessagesSquare, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const adminNavLinks = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Programs', path: '/admin/programs', icon: FileText },
  { name: 'Gallery', path: '/admin/gallery', icon: GalleryHorizontal },
  { name: 'Messages', path: '/admin/messages', icon: MessagesSquare },
];

const AdminLayout = () => {
  const { supabase } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          <span className="text-orange-500">Punaroday</span> Admin
        </div>
        <nav className="flex-grow p-4">
          <ul className="space-y-2">
            {adminNavLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center p-2 rounded-md transition-colors ${
                      isActive ? 'bg-orange-500 text-white' : 'hover:bg-gray-700'
                    }`
                  }
                >
                  <link.icon className="h-5 w-5 mr-3" />
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <Button
            onClick={handleSignOut}
            variant="ghost"
            className="w-full justify-start text-left hover:bg-gray-700"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;