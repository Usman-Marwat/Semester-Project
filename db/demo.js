import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const FIREBASE_API_ENDPOINT =
  "https://demo2-bdd15-default-rtdb.firebaseio.com/"; // << LOOK Here, provide URL of your Firebase Realtime Database

export const postData = () => {
  var requestOptions = {
    method: "POST",
    body: JSON.stringify({
      employeename: "New Employee",
      taskdesc: "New Task",
    }),
  };
  fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
export const getData = async () => {
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`);
  const data = await response.json();
  console.log(data);
};

export const deleteData = () => {
  const id = "-Ms4xZVlgv5Fw-QWlOpv";
  var requestOptions = {
    method: "DELETE",
  };
  fetch(`${FIREBASE_API_ENDPOINT}/tasks/${id}.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log("Delete Response:", result))
    .catch((error) => console.log("error", error));
};

export const updateData = () => {
  const id = "-Ms4xMzhRhSrEvM7iw_O";
  var requestOptions = {
    method: "PATCH",
    body: JSON.stringify({
      username: "UserName",
      password: "Password",
      employeename: "Update New Employee",
    }),
  };

  fetch(`${FIREBASE_API_ENDPOINT}/tasks/${id}.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

//---------------------------------------------------------

export const GetId = async () => {
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`);
  const data = await response.json();
  const ids = Object.keys(data);
  console.log(ids);
};

export const addMember = (id, name, portfolio_url, image) => {
  var requestOptions = {
    method: "POST",
    body: JSON.stringify({
      id,
      name,
      portfolio_url,
      image,
    }),
  };
  fetch(`${FIREBASE_API_ENDPOINT}/members.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const getMembers = async () => {
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/members.json`);
  const data = await response.json();
  return data;
};

export const addProject = () => {
  var requestOptions = {
    method: "POST",
    body: JSON.stringify({
      id: 4,
      title: "CDA Contract",
      description: "Canal Building Setup",
      team: [
        {
          name: "Usman Khan",
          photo:
            "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        },
        {
          name: "Umar Ayub",
          photo:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
        {
          name: "Ali Ahmad",
          photo:
            "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        },
      ],
      progress: 50,
      createdAt: "Feb 25 2021",
      tasks: 20,
      status: "ongoing",
    }),
  };
  fetch(`${FIREBASE_API_ENDPOINT}/projects.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const getProjectsDb = async () => {
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/projects.json`);
  const data = await response.json();
  return data;
};

export const getProjectDb = async (id) => {
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/projects.json`);
  const data = await response.json();
  for (let project in data) {
    if (!data.hasOwnProperty(project)) {
      continue;
    }
    if (data[project].id == id) {
      return data[project];
    }
  }
  // console.log(data);
};

export const addTask = (newTask) => {
  var requestOptions = {
    method: "POST",
    body: JSON.stringify(newTask),
  };
  fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const getTasksDb = async () => {
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`);
  const data = await response.json();
  return data;
};

export const addUser = (newUser) => {
  var requestOptions = {
    method: "POST",
    body: JSON.stringify(newUser),
  };
  fetch(`${FIREBASE_API_ENDPOINT}/users.json`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const isUserDb = async ({ username, password }) => {
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/users.json`);
  const data = await response.json();
  for (let user in data) {
    if (!data.hasOwnProperty(user)) {
      continue;
    }
    if (data[user].username == username && data[user].password == password) {
      return true;
    }
  }
};

export const getUserDb = async () => {
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/users.json`);
  const data = await response.json();
  for (let user in data) {
    // console.log(data[user]);
    return data[user];
  }
};

export const updateUserDb = async (newUser) => {
  const id = "-Mt8sTI4PIkoXdx3M4aD";
  var requestOptions = {
    method: "PATCH",
    body: JSON.stringify(newUser),
  };
  const response = await fetch(
    `${FIREBASE_API_ENDPOINT}/users/${id}.json`,
    requestOptions
  );
  // const data = await response.json();
};

export const getTaskDb = async (id) => {
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/tasks.json`);
  const data = await response.json();
  for (let task in data) {
    if (!data.hasOwnProperty(task)) {
      continue;
    }
    if (data[task].id == id) {
      return data[task];
    }
  }
};

export const addTaskDetails = async (details) => {
  var requestOptions = {
    method: "POST",
    body: JSON.stringify(details),
  };
  const response = await fetch(
    `${FIREBASE_API_ENDPOINT}/taskDetails.json`,
    requestOptions
  );
  const data = await response.json();
  console.log(data);
};

export const getTaskDetailsDb = async (taskId) => {
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/taskDetails.json`);
  const data = await response.json();
  for (let item in data) {
    if (data[item].taskId == taskId) {
      console.log("-------");
      console.log(data[item]);
      console.log("-------");
      return data[item];
    }
  }
};

export const getTaskDetailsIdDb = async (taskId) => {
  const response = await fetch(`${FIREBASE_API_ENDPOINT}/taskDetails.json`);
  const data = await response.json();
  for (let id in data) {
    if (data[id].taskId == taskId) {
      return id;
    }
  }
};

export const updateTaskDetailsDb = async (details) => {
  const id = await getTaskDetailsIdDb(details.taskId);
  // const id = "-Mt8sTI4PIkoXdx3M4aD";
  if (!id) {
    await addTaskDetails(details);
    return;
  }

  var requestOptions = {
    method: "PATCH",
    body: JSON.stringify(details),
  };
  const response = await fetch(
    `${FIREBASE_API_ENDPOINT}/taskDetails/${id}.json`,
    requestOptions
  );
  // const data = await response.json();
};

export const deleteTaskDb = async (taskId) => {
  const id = await getTaskDetailsIdDb(taskId);
  console.log(id);
  var requestOptions = {
    method: "DELETE",
  };
  const response = await fetch(
    `${FIREBASE_API_ENDPOINT}/tasks/${id}.json`,
    requestOptions
  );
  const data = await response.json();
};
