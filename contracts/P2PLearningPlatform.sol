// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract P2PLearningPlatform {
    struct Course {
        address payable instructor;
        uint256 price;
        uint256 tips;
        bool isActive;
    }

    mapping(uint256 => Course) public courses;
    uint256 public courseCount;

    event CourseCreated(uint256 courseId, address instructor, uint256 price);
    event CoursePurchased(uint256 courseId, address learner);
    event TipSent(uint256 courseId, address sender, uint256 amount);

    function createCourse(uint256 price) public {
        courseCount++;
        courses[courseCount] = Course(payable(msg.sender), price, 0, true);
        emit CourseCreated(courseCount, msg.sender, price);
    }

    function purchaseCourse(uint256 courseId) public payable {
        Course storage course = courses[courseId];
        require(course.isActive, "Course not available");
        require(msg.value == course.price, "Incorrect payment");

        course.instructor.transfer(msg.value);
        emit CoursePurchased(courseId, msg.sender);
    }

    function sendTip(uint256 courseId) public payable {
        Course storage course = courses[courseId];
        require(course.isActive, "Course not available");

        course.tips += msg.value;
        course.instructor.transfer(msg.value);
        emit TipSent(courseId, msg.sender, msg.value);
    }

    function deactivateCourse(uint256 courseId) public {
        Course storage course = courses[courseId];
        require(msg.sender == course.instructor, "Only instructor can deactivate");

        course.isActive = false;
    }
}
