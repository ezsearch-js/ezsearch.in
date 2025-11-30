import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import BusinessList from './pages/Business/BusinessList';
import JobList from './pages/Jobs/JobList';
import JobApplication from './pages/Jobs/JobApplication';
import JobPosting from './pages/Jobs/JobPosting';
import AdminDashboard from './pages/Admin/AdminDashboard';
import GSTTools from './pages/Tools/GSTTools';
import CVBuilder from './pages/Tools/CVBuilder';
import PricingPlans from './pages/Business/PricingPlans';
import AIAgents from './pages/Agents/AIAgents';
import EscrowPayment from './pages/Payments/EscrowPayment';
import KYCVerification from './pages/Compliance/KYCVerification';
import PrivacyPolicy from './pages/Compliance/PrivacyPolicy';
import TermsOfService from './pages/Compliance/TermsOfService';
import BusinessRegistration from './pages/Business/BusinessRegistration';
import BusinessList from './pages/Business/BusinessList';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes (Wrapped in MainLayout) */}
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/businesses" element={<MainLayout><BusinessList /></MainLayout>} />
        <Route path="/jobs" element={<MainLayout><JobList /></MainLayout>} />
        <Route path="/jobs/post" element={<MainLayout><JobPosting /></MainLayout>} />
        <Route path="/jobs/apply/:jobId" element={<MainLayout><JobApplication /></MainLayout>} />
        <Route path="/tools/gst" element={<MainLayout><GSTTools /></MainLayout>} />
        <Route path="/tools/cv-builder" element={<MainLayout><CVBuilder /></MainLayout>} />
        <Route path="/business/pricing" element={<MainLayout><PricingPlans /></MainLayout>} />
        <Route path="/business/register" element={<MainLayout><BusinessRegistration /></MainLayout>} />
        <Route path="/business/list" element={<MainLayout><BusinessList /></MainLayout>} />

        {/* Placeholders for other links */}
        <Route path="/payments" element={<MainLayout><EscrowPayment /></MainLayout>} />
        <Route path="/profile" element={<MainLayout><div className="text-white p-8">Profile Module Coming Soon</div></MainLayout>} />
        <Route path="/agents" element={<MainLayout><AIAgents /></MainLayout>} />
        <Route path="/compliance/kyc" element={<MainLayout><KYCVerification /></MainLayout>} />
        <Route path="/privacy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
        <Route path="/terms" element={<MainLayout><TermsOfService /></MainLayout>} />
        <Route path="/admin" element={<MainLayout><AdminDashboard /></MainLayout>} />
        <Route path="/compliance" element={<MainLayout><div className="text-white p-8">Compliance Module Coming Soon</div></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
