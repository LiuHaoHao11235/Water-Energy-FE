<template>
    <el-header class="header">
      <el-row class="header-row">
        <el-col :span="6" class="left-section">
          <img src="@/assets/lai_yih_logo.png" alt="Lai Yih Logo" class="lai-yih-logo" />
        </el-col>
  
        <el-col :span="12" class="center-section">
          <span class="dashboard-title">ESG Dashboard</span>
        </el-col>
  
        <el-col :span="6" class="right-section">
          <img src="@/assets/logo.png" alt="Logo" class="logo" />
          <span class="company-name">Ty Bach</span>
          <div class="user-info">
            <img src="@/assets/user.png" alt="User" class="user-icon" />
            <span class="user-name">Admin</span>
          </div>
        </el-col>
      </el-row>
    </el-header>
  </template>
  
  <style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: #f8f9fa;
    border-bottom: 2px solid #ddd;
    z-index: 1000;
  }
  
  .header-row {
    display: flex;
    align-items: center;
    height: 100%;
  }
  
  .left-section,
  .center-section,
  .right-section {
    display: flex;
    align-items: center;
    height: 100%;
  }
  
  .left-section {
    justify-content: flex-start;
    padding-left: 10px;
  }
  
  .center-section {
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .right-section {
    justify-content: flex-end;
    padding-right: 10px;
    gap: 15px;
  }
  
  .logo,
  .lai-yih-logo {
    height: 40px;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .user-icon {
    height: 35px;
  }
  
  .company-name,
  .user-name {
    font-size: 18px;
    font-weight: 600;
  }
  </style>
  