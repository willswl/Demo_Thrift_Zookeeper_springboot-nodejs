package com.wills.service;

import org.apache.thrift.TException;

import com.wills.interfaces.*;

public class UserServiceImpl implements UserService.Iface{

	@Override
	public UserDto getUser() throws TException
	  {		
		UserDto user = new UserDto(1000,"songwenlong");
		return user;
	  }

}
