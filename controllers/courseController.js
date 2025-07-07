import Course from "../models/course.js";

export const getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};

export const createCourse = async (req, res) => {
  const { title, description, instructor, duration, price } = req.body;
  const image = req.file?.filename;

  const course = await Course.create({
    title,
    description,
    instructor,
    duration,
    image,
    price
  });

  res.status(201).json(course);
};
