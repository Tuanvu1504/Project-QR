import ListItemCourse from './components/ListItemCourse';
import QRItem from './components/QRItem';
import { CourseProvider } from './context/CourseContent';
function App() {
  return (
    <>
      <h1 className='header-title'>Danh sách các khóa học</h1>
      <CourseProvider>
        <ListItemCourse></ListItemCourse>
        <QRItem></QRItem>
      </CourseProvider>
    </>
  );
}

export default App;
