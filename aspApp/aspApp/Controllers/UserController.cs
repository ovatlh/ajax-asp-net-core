using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using aspApp.Models;
using aspApp.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace aspApp.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult UserList()
        {
            UserRepository userRepository = new UserRepository();
            var userList = userRepository.GetAll();

            return View(userList);
        }

        public IActionResult AddUser()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddUser(User user)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    UserRepository userRepository = new UserRepository();
                    userRepository.Insert(user);

                    return Ok();
                }
                catch (Exception ex)
                {
                    return NotFound();
                }
            }
            else
            {
                return NotFound();
            }
        }

        public IActionResult EditUser(int id)
        {
            UserRepository userRepository = new UserRepository();
            var userResult = userRepository.GetById(id);

            if (userResult != null)
            {
                return View(userResult);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult EditUser(User user)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    UserRepository userRepository = new UserRepository();
                    userRepository.Update(user);

                    return Ok();
                }
                catch (Exception ex)
                {
                    return NotFound();
                }
            }
            else
            {
                return NotFound();
            }
        }

        public IActionResult DeleteUser(int id)
        {
            UserRepository userRepository = new UserRepository();
            var userResult = userRepository.GetById(id);

            if (userResult != null)
            {
                return View(userResult);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult DeleteUser(User user)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    UserRepository userRepository = new UserRepository();
                    userRepository.Delete(user);

                    return Ok();
                }
                catch (Exception ex)
                {
                    return NotFound();
                }
            }
            else
            {
                return NotFound();
            }
        }
    }
}