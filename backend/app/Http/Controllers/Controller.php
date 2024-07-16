<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;
use App\Models\Employees;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    public function getAllEmployees()
    {
        // Using Eloquent ORM
        
        // Using DB facade (Query Builder)
        $employees = DB::table('employees')->get();
        return response()->json($employees);


    }

    public function deleteEmployee($id)
    {
        $employee = Employees::find($id);

        if (!$employee) {
            return response()->json(['error' => 'Employee not found'], 404);
        }

        $employee->delete();

        return response()->json(['message' => 'Employee deleted successfully']);
    }

    public function storeEmployee(Request $request)
    {
        // $this->validate($request, [
        //     'name' => 'required|string',
        //     'username' => 'required|string',
        //     'email' => 'required|email|unique:employees',
        //     'role' => 'required|string',
        //     'password' => 'required|string|min:6'
        // ]);

        $employee = new Employees([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'role' => $request->role,
            'password' => $request->password
            // 'password' => app('hash')->make($request->password),

        ]);

        $employee->save();

        return response()->json($employee, 201);
    }

    public function updateEmployee(Request $request, $id)
    {
        // $this->validate($request, [
        //     'name' => 'required|string',
        //     'username' => 'required|string|unique:employees,username,' . $id,
        //     'email' => 'required|email|unique:employees,email,' . $id,
        //     'role' => 'required|string',
        //     'password' => 'nullable|string'
        // ]);

        $employee = Employees::findOrFail($id);
        $employee->name = $request->input('name');
        $employee->username = $request->input('username');
        $employee->email = $request->input('email');
        $employee->role = $request->input('role');
        $employee->password = $request->input('password');
        
        // if ($request->has('password')) {
        //     $employee->password = app('hash')->make($request->input('password'));
        // }

        $employee->save();

        return response()->json($employee, 200);
    }

    public function updateVisibility(Request $request, $id)
    {
        // $this->validate($request, [
        //     'name' => 'required|string',
        //     'username' => 'required|string|unique:employees,username,' . $id,
        //     'email' => 'required|email|unique:employees,email,' . $id,
        //     'role' => 'required|string',
        //     'password' => 'nullable|string'
        // ]);

        $employee = Employees::findOrFail($id);
        $employee-> visibility = $request->input('visibility');

       
        
        // if ($request->has('password')) {
        //     $employee->password = app('hash')->make($request->input('password'));
        // }

        $employee->save();

        return response()->json($employee, 200);
    }

    
}


