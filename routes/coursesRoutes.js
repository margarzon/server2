const express = require('express')
const  Course = require('../models/coursesModel')
//definir ruteador de bootcamps
const router = express.Router()

router.get (('/'),
        async (req, res)=> {
            // traer los bootcamps en bd 
            const courses = await Course.find()

            return res.json({
                succes: true,
                data:courses 
            })
        })

router.get ('/:id',
        async(req , res) => {
        const course = req.params.id
        //Consultar bootcamp po id
        const courses = await Course.findById(course)
        return res.json({
            succes : true,
            data :courses

         })

    })


    router.post('/', async (req, response) => {
        const newcourse = await Course.create(req.body);
        return response.json({
          success: true,
          data: newcourse,
        });
      });


router.put('/:id', async(req, res)=>{
        const updateCourse = await Course.findByIdAndUpdate(req.params.id)
        res.json({
            //parametro: req.params.id
            success:true,
            data: updateCourse
        })  
    })
//4. eliminar

router.delete ('/:id',
       async (req , res) => {
         const courseId  = req.params.id 
         const deletecourse = await Course.findByIdAndDelete(courseId)
        return res.json({
            succes : true,
            msg :`eliminando course cuyo id es: ${courseId}`
        }
        )
        })
module.exports = router;