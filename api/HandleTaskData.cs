using api.Models;
using System.Collections.Generic;
namespace api
{
    public class HandleTaskData
    {
        private static List<Tasks> myTasks = new List<Tasks>();
        private static int maxId = 1;
        public static List<Tasks> GetAllTasks(){
            return myTasks;
        }

        public static void PostTask(Tasks newTask){
            newTask.Id = maxId.ToString();
            maxId++;
            myTasks.Add(newTask);
        }
        public static void PutTask(Tasks newTask){
            // newTask.Id = maxId.ToString();
            // maxId++;
            // myTasks.Add(newTask);
        }
    }
}