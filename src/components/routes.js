import Arrival from './Arrival';
import Departure from './Departure';
import Home from './Home';
import Admin from './Admin';
import Supervisor from './Supervisor';
import AdminMain from './Admin-Main';
import AdminEdit from './Admin-Edit-Flight-Details';
import AdminView from './Admin-View-Flight-Details';
import AdminInfo from './Admin-Information';
import SupervisorView from './Supervisor-Flight-Delay-Details';
import SupervisorTiming from './Supervisor-Flight-Timings';
import EditForm from './EditForm';
import App from '../App';
const routes = [
  {
    path: '/ad-main',
    component: AdminMain,
    exact: true
  },
  {
    path : '/',
    component : Home,
    exact : true
  },
  {
    path : '/arrival',
    component : Arrival,
    exact : true
  },
  {
    path : '/departure',
    component : Departure,
    exact : true
  },
  {
    path : '/admin',
    component : Admin,
    exact : true
  },
  {
    path : '/supervisor',
    component : Supervisor,
    exact : true
  },
  {
    path : '/ad-edit',
    component : AdminEdit,
    exact : true
  },
  {
    path : '/ad-view',
    component : AdminView,
    exact : true
  },
  {
    path : '/ad-info',
    component : AdminInfo,
    exact : true
  },
  {
    path : '/super-view',
    component : SupervisorView,
    exact : true
  },
  {
    path : '/super-flight',
    component : SupervisorTiming,
    exact : true
  },
  {
    path : '/',
    component : Home,
    exact : true
  },
  {
    path :'/edit-form',
    component : EditForm,
    exact : true
  }
]

export default routes;