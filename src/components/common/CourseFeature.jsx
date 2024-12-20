const CourseFeature = ({ icon: Icon, title, description }) => {
  return (
    <li className="course-feature">
      <Icon className="course-feature__icon" size={20} />
      <div>
        <p className="course-feature__title">{title}</p>
        <p className="course-feature__description">{description}</p>
      </div>
    </li>
  );
};

export default CourseFeature; 