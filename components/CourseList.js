import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Course from './Course';
import TermSelector from './TermSelector';

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);
const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
);


const CourseList = ({courses}) => {
  const [selectedTerm, setSelectedTerm ] = useState('Winter');
  const selectedTerms = courses.filter(course => selectedTerm === getCourseTerm(course));
  return (
    <View>
      <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
      <ScrollView>
        <View style={StyleSheet.courseList}>
        { selectedTerms.map(course => <Course key={course.id} course={course} />) }
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default CourseList;