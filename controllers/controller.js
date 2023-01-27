// get all questions
import Result from '../models/resultSchema.js'
import Questions  from '../models/questionSchema.js'


export async function getQuestions(req,res){
    try {
    
        // const q = await Questions.find();
        res.json(q)
        // if(!q){
        //     res.json(q);  
        // }
        // // res.json(q); 
        // else{
        //     res.json('something went wrong');
        // }
    } catch (error) {
        console.log({error})
        res.json({error})
    }
}

//insert question
export async function insertQuestions(req,res){

}

//delete questions

export async function deleteQuestions(req,res){
    res.json('delete questions')
}

//get all result

export async function getResult(req,res){
    res.json(' get result api request')
}

//post result
export async function postResult(req,res){
    res.json(' post result api request')
}
//delete result

export async function deleteResult(req,res){
    res.json(' delete result api request')
}