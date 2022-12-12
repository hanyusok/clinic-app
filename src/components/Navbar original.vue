<template>
  <!-- Navbar -->
  <nav
    class="top-0 navbar navbar-expand-lg position-absolute z-index-3"
    :class="isBlur ? isBlur : 'shadow-none my-2 navbar-transparent w-100'"
  >
    <div class="container">
      <a
        class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
        :class="darkMode ? 'text-black' : 'text-white'"
        href="/"
        >콜닥 PRO</a
      >
      <button
        class="shadow-none navbar-toggler ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="mt-2 navbar-toggler-icon">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div id="navigation" class="pt-3 pb-2 collapse navbar-collapse w-100 py-lg-0">
        <ul class="mx-auto navbar-nav navbar-nav-hover">
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              id="dropdownMenuPages"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
              <img
                :src="downArrWhite"
                alt="down-arrow"
                class="arrow ms-1"
                :class="darkMode ? 'd-none' : 'd-lg-block d-none'"
              />
              <img
                :src="downArrBlack"
                alt="down-arrow"
                class="arrow ms-1 d-block"
                :class="darkMode ? 'd-lg-block' : 'd-lg-none'"
              />
            </a>
            <div
              class="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-xl border-radius-xl mt-lg-3"
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="px-4 py-2 col-12">
                  <div class="row">
                    <div class="col-4 position-relative">
                      <div
                        class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <div class="d-inline-block">
                          <div
                            class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center"
                          >
                            <icon name="spaceship" />
                          </div>
                        </div>
                        Call Dashboards
                      </div>

                      <router-link
                        :to="{ name: 'Signin' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Sign in</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'Overview' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Overview</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'NewUser' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">New User</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'CRM' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">CRM</span>
                      </router-link>
                      <div
                        class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <div class="d-inline-block">
                          <div
                            class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                          >
                            <icon name="office" />
                          </div>
                        </div>
                        Users
                      </div>
                      <router-link :to="{ name: 'Security' }" class="dropdown-item border-radius-md">
                        <span class="ps-3">Reports</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'Security' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Security</span>
                      </router-link>
                      <hr class="vertical dark" />
                    </div>
                    <div class="col-4 position-relative">
                      <div
                        class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <div class="d-inline-block">
                          <div
                            class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center"
                          >
                            <icon name="dashboard" />
                          </div>
                        </div>
                        Profile
                      </div>
                      <router-link
                        :to="{ name: 'Overview' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Overview</span>
                      </router-link>
                      <router-link :to="{ name: 'ProductsList' }" class="dropdown-item border-radius-md">
                        <span class="ps-3">Products list</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'OrderList' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Order list</span>
                      </router-link>
                      <div
                        class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <div class="d-inline-block">
                          <div
                            class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                          >
                            <icon name="box3d" />
                          </div>
                        </div>
                        Projects
                      </div>
                      <router-link :to="{ name: 'CRM' }" class="dropdown-item border-radius-md">
                        <span class="ps-3">CRM</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'OrderList' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Order List</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'Referral' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Referral</span>
                      </router-link>
                      <hr class="vertical dark" />
                    </div>
                    <div class="col-4">
                      <div
                        class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <div class="d-inline-block">
                          <div
                            class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                          >
                            <icon name="box3d" />
                          </div>
                        </div>
                        Account
                      </div>
                      <router-link
                        :to="{ name: 'Error' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Error</span>
                      </router-link>
                      <router-link :to="{ name: 'NewUser' }" class="dropdown-item border-radius-md">
                        <span class="ps-3">NewUser</span>
                      </router-link>
                      <router-link :to="{ name: 'Security' }" class="dropdown-item border-radius-md">
                        <span class="ps-3">Security</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'CRM' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">CRM</span>
                      </router-link>
                      <div
                        class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <div class="d-inline-block">
                          <div
                            class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                          >
                            <icon name="document" />
                          </div>
                        </div>
                        Extra
                      </div>
                      <router-link
                        :to="{ name: 'Pricing' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Pricing</span>
                      </router-link>
                      <router-link :to="{ name: 'Pricing' }" class="dropdown-item border-radius-md">
                        <span class="ps-3">Pricing</span>
                      </router-link>
                      <router-link :to="{ name: 'Pricing' }" class="dropdown-item border-radius-md">
                        <span class="ps-3">Pricing</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <!-- responsive -->
              <!-- responsive -->
              <!-- responsive -->
              <!-- responsive -->
              <div class="d-lg-none">
                <div
                  class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center"
                    >
                      <icon name="document" />
                    </div>
                  </div>
                  Call Dashboards
                </div>
                <router-link
                  :to="{ name: 'Signin' }"
                  class="dropdown-item border-radius-md"
                >Signin</router-link>
                <router-link
                  :to="{ name: 'Signin' }"
                  class="dropdown-item border-radius-md"
                >Signin</router-link>
                <router-link
                  :to="{ name: 'Overview' }"
                  class="dropdown-item border-radius-md"
                >Overview</router-link>
                <router-link
                  :to="{ name: 'NewUser' }"
                  class="dropdown-item border-radius-md"
                >New user</router-link>
                <router-link :to="{ name: 'CRM' }" class="dropdown-item border-radius-md">
                  CRM</router-link>
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                    >
                      <icon name="office" />
                    </div>
                  </div>
                  Users
                </div>
                <!-- <router-link
                  :to="{ name: 'Reports' }"
                  class="dropdown-item border-radius-md"
                >Reports</router-link>
                <router-link to="#" class="dropdown-item border-radius-md">New user</router-link> -->
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                    >
                      <icon name="customer-support" />
                    </div>
                  </div>
                  Profile
                </div>
                <!-- <router-link
                  :to="{ name: 'Overview' }"
                  class="dropdown-item border-radius-md"
                >Overview</router-link>
                <router-link :to="{ name: 'Teams' }" class="dropdown-item border-radius-md">Teams</router-link>
                <router-link to="#" class="dropdown-item border-radius-md">Projects</router-link> -->
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                    >
                      <icon name="customer-support" />
                    </div>
                  </div>
                  Projects
                </div>
                <router-link
                  :to="{ name: 'Pricing' }"
                  class="dropdown-item border-radius-md"
                >Pricing</router-link>
                <router-link
                  :to="{ name: 'Pricing' }"
                  class="dropdown-item border-radius-md"
                >Timeline</router-link>
                <router-link
                  :to="{ name: 'ProductsList' }"
                  class="dropdown-item border-radius-md"
                >New Project</router-link>
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                    >
                      <icon name="box3d" />
                    </div>
                  </div>
                  Account
                </div>
                <router-link
                  :to="{ name: 'Error' }"
                  class="dropdown-item border-radius-md"
                >Error</router-link>
                <router-link
                  :to="{ name: 'Error' }"
                  class="dropdown-item border-radius-md"
                >Billing</router-link>
                <router-link
                  :to="{ name: 'CRM' }"
                  class="dropdown-item border-radius-md"
                >Invoice</router-link>
                <router-link
                  :to="{ name: 'Security' }"
                  class="dropdown-item border-radius-md"
                >Security</router-link>
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                    >
                      <icon name="spaceship" />
                    </div>
                  </div>
                  Extra
                </div>
                <router-link
                  :to="{ name: 'Pricing' }"
                  class="dropdown-item border-radius-md"
                  >Pricing Page</router-link
                >
                <router-link
                  :to="{ name: 'Pricing' }"
                  class="dropdown-item border-radius-md"
                  >RTL Page</router-link
                >
                <router-link
                  :to="{ name: 'Pricing' }"
                  class="dropdown-item border-radius-md"
                  >Widgets</router-link
                >
              </div>
            </div>
          </li>
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              id="dropdownMenuAccount"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Authentication
              <img
                :src="downArrWhite"
                alt="down-arrow"
                class="arrow ms-1"
                :class="darkMode ? 'd-none' : 'd-lg-block d-none'"
              />
              <img
                :src="downArrBlack"
                alt="down-arrow"
                class="arrow ms-1 d-block"
                :class="darkMode ? 'd-lg-block' : 'd-lg-none'"
              />
            </a>
            <div
              class="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-lg border-radius-xl mt-lg-3"
              aria-labelledby="dropdownMenuAccount"
            >
              <div class="row d-none d-lg-flex">
                <div class="col-6">
                  <div
                    class="py-6 h-100 w-100 d-flex border-radius-lg position-relative dropdown-image"
                    :style="{
                      backgroundImage: `url(${bgImg})`
                    }"
                  >
                    <div class="mask bg-gradient-success border-radius-lg"></div>
                    <div
                      class="d-flex justify-content-center align-items-center text-center text-white font-weight-bold w-100 z-index-1 flex-column"
                    >
                      <div
                        class="icon icon-shape rounded-circle bg-white shadow text-center"
                      >
                        <i
                          class="ni ni-diamond text-success text-gradient text-lg"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <span class="text-lg mt-2">
                        Explore our
                        <br />utilities pages
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-6 ps-0 d-flex justify-content-center flex-column">
                  <ul class="list-group">
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownSignIn"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Sign In</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdownSignIn"
                      >
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Pricing' }"
                        >
                          <span>Basic</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signin' }"
                        >
                          <span>Signin</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signup' }"
                        >
                          <span>Illustration</span>
                        </router-link>
                      </div>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownSignUp"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Sign Up</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdownSignUp"
                      >
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signup' }"
                        >
                          <span>Signup</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signup' }"
                        >
                          <span>Signup</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signup' }"
                        >
                          <span>Illustration</span>
                        </router-link>
                      </div>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownPasswordReset"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Reset Password</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdownPasswordReset"
                      >
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Pricing' }"
                        >
                          <span>Basic</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signup' }"
                        >
                          <span>Signup</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signin' }"
                        >
                          <span>Illustration</span>
                        </router-link>
                      </div>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownLock"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Lock</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdownLock"
                      >
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'NewUser' }"
                        >
                          <span>Basic</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signup' }"
                        >
                          <span>Signup</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signin' }"
                        >
                          <span>Signin</span>
                        </router-link>
                      </div>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdown2fa"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>2-Step Verification</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdown2fa"
                      >
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Pricing' }"
                        >
                          <span>Basic</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Pricing' }"
                        >
                          <span>Cover</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Pricing' }"
                        >
                          <span>Illustration</span>
                        </router-link>
                      </div>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownError"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Error</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdownError"
                      >
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Error' }"
                        >
                          <span>404</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Error' }"
                        >
                          <span>500</span>
                        </router-link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="d-lg-none">
                <div class="col-12 d-flex justify-content-center flex-column">
                  <h6
                    class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Sign In
                  </h6>
                  <router-link
                    :to="{ name: 'Signin' }"
                    class="dropdown-item border-radius-md"
                    >Basic</router-link
                  >
                  <router-link
                    :to="{ name: 'Signin' }"
                    class="dropdown-item border-radius-md"
                    >Cover</router-link
                  >
                  <router-link
                    :to="{ name: 'Signup' }"
                    class="dropdown-item border-radius-md"
                    >Illustration</router-link
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Sign Up
                  </h6>
                  <router-link
                    :to="{ name: 'Signup' }"
                    class="dropdown-item border-radius-md"
                    >Basic</router-link
                  >
                  <router-link
                    :to="{ name: 'Signup' }"
                    class="dropdown-item border-radius-md"
                    >Cover</router-link
                  >
                  <router-link
                    :to="{ name: 'Signup' }"
                    class="dropdown-item border-radius-md"
                    >Illustration</router-link
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Reset Password
                  </h6>
                  <router-link
                    :to="{ name: 'Pricing' }"
                    class="dropdown-item border-radius-md"
                    >Basic</router-link
                  >
                  <router-link
                    :to="{ name: 'Pricing' }"
                    class="dropdown-item border-radius-md"
                    >Cover</router-link
                  >
                  <router-link
                    :to="{ name: 'Pricing' }"
                    class="dropdown-item border-radius-md"
                    >Illustation</router-link
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Lock
                  </h6>
                  <router-link
                    :to="{ name: 'Pricing' }"
                    class="dropdown-item border-radius-md"
                    >Basic</router-link
                  >
                  <router-link
                    :to="{ name: 'Pricing' }"
                    class="dropdown-item border-radius-md"
                    >Cover</router-link
                  >
                  <router-link
                    :to="{ name: 'Pricing' }"
                    class="dropdown-item border-radius-md"
                    >Illustration</router-link
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    2-Step Verification
                  </h6>
                  <router-link
                    :to="{ name: 'Pricing' }"
                    class="dropdown-item border-radius-md"
                    >Basic</router-link
                  >
                  <router-link
                    :to="{ name: 'NewUser' }"
                    class="dropdown-item border-radius-md"
                    >Cover</router-link
                  >
                  <router-link
                    :to="{ name: 'NewUser' }"
                    class="dropdown-item border-radius-md"
                    >Illustration</router-link
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Error
                  </h6>
                  <router-link
                    :to="{ name: 'Error' }"
                    class="dropdown-item border-radius-md"
                  >Error</router-link>
                  <router-link
                    :to="{ name: 'Error' }"
                    class="dropdown-item border-radius-md"
                  >Error</router-link>
                </div>
              </div>
            </div>
          </li>

          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              id="dropdownMenuBlocks"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Applications
              <img
                :src="downArrWhite"
                alt="down-arrow"
                class="arrow ms-1"
                :class="darkMode ? 'd-none' : 'd-lg-block d-none'"
              />
              <img
                :src="downArrBlack"
                alt="down-arrow"
                class="arrow ms-1 d-block"
                :class="darkMode ? 'd-lg-block' : 'd-lg-none'"
              />
            </a>
            <div
              class="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-md dropdown-md-responsive border-radius-lg mt-lg-3"
              aria-labelledby="dropdownMenuBlocks"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li
                    class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                  >
                    <router-link
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      :to="{ name: 'Signup' }"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-single-copy-04 text-gradient text-success"></i>
                        </div>
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <p class="p-0 dropdown-header text-dark">Kanban</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </li>
                  <li
                    class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                  >
                    <!-- <router-link
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      :to="{ name: 'Wizard' }"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-laptop text-gradient text-success"></i>
                        </div>
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <p class="p-0 dropdown-header text-dark">Signup</p>
                          </div>
                        </div>
                      </div>
                    </router-link> -->
                  </li>
                  <li
                    class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                  >
                    <!-- <router-link
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      :to="{ name: 'Signin' }"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-badge text-gradient text-success"></i>
                        </div>
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <p class="p-0 dropdown-header text-dark">DataTables</p>
                          </div>
                        </div>
                      </div>
                    </router-link> -->
                  </li>
                  <li
                    class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                  >
                    <!-- <router-link
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      :to="{ name: 'Calendar' }"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-notification-70 text-gradient text-success"></i>
                        </div>
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <p class="p-0 dropdown-header text-dark">Calendar</p>
                          </div>
                        </div>
                      </div>
                    </router-link> -->
                  </li>
                </ul>
              </div>
              <!-- responsive -->
              <div class="row d-lg-none">
                <div class="col-md-12">
                  <!-- <router-link class="py-2 ps-3 border-radius-md" :to="{ name: 'Kanban' }">
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-single-copy-04 text-gradient text-success"></i>
                      </div>
                      <div class="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <p class="p-0 dropdown-header text-dark">Kanban</p>
                        </div>
                      </div>
                    </div>
                  </router-link> 
                  <router-link class="py-2 ps-3 border-radius-md" :to="{ name: 'Wizard' }">
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-laptop text-gradient text-success"></i>
                      </div>
                      <div class="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <p class="p-0 dropdown-header text-dark">Wizard</p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                  <router-link class="py-2 ps-3 border-radius-md" :to="{ name: 'Data Tables' }">
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-badge text-gradient text-success"></i>
                      </div>
                      <div class="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <p class="p-0 dropdown-header text-dark">DataTables</p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                  <router-link class="py-2 ps-3 border-radius-md" :to="{ name: 'Calendar' }">
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-notification-70 text-gradient text-success"></i>
                      </div>
                      <div class="w-100 d-flex align-items-center justify-content-between">
                        <div>
                          <p class="p-0 dropdown-header text-dark">Calendar</p>
                        </div>
                      </div>
                    </div>
                  </router-link> -->
                </div>
              </div>
            </div>
          </li>
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              id="dropdownMenuEcommerce"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ecommerce
              <img
                :src="downArrWhite"
                alt="down-arrow"
                class="arrow ms-1"
                :class="darkMode ? 'd-none' : 'd-lg-block d-none'"
              />
              <img
                :src="downArrBlack"
                alt="down-arrow"
                class="arrow ms-1 d-block"
                :class="darkMode ? 'd-lg-block' : ' d-lg-none'"
              />
            </a>
            <div
              class="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-lg border-radius-xl mt-lg-3"
              aria-labelledby="dropdownMenuEcommerce"
            >
              <div class="row d-none d-lg-block">
                <div class="px-4 py-2 col-12">
                  <div class="row">
                    <div class="col-6 position-relative">
                      <div
                        class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <div class="d-inline-block">
                          <div
                            class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center"
                          >
                            <svg
                              width="12px"
                              height="12px"
                              viewBox="0 0 40 44"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                              <title>document</title>
                              <g
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <g
                                  transform="translate(-1870.000000, -591.000000)"
                                  fill="#FFFFFF"
                                  fill-rule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(154.000000, 300.000000)">
                                      <path
                                        d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                        opacity="0.603585379"
                                      />
                                      <path
                                        d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                        Orders
                      </div>
                      <!-- <router-link
                        :to="{ name: 'Order List' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Order List</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'Order Details' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Order Details</span>
                      </router-link> -->
                      <div
                        class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <div class="d-inline-block">
                          <div
                            class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                          >
                            <icon name="box3d" />
                          </div>
                        </div>
                        General
                      </div>
                      <router-link
                        :to="{ name: 'NewUser' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">NewUser</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'Referral' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Referral</span>
                      </router-link>
                      <hr class="vertical dark" />
                    </div>
                    <div class="col-6 position-relative">
                      <div
                        class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <div class="d-inline-block">
                          <div
                            class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center"
                          >
                            <icon name="dashboard" />
                          </div>
                        </div>
                        Products
                      </div>
                      <!-- <router-link
                        :to="{ name: 'New Product' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">New Product</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'Edit Product' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Edit Product</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'Product Page' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Product Page</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'Products List' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Products List</span>
                      </router-link> -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- responsive -->
              <div class="d-lg-none">
                <div
                  class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center"
                    >
                      <icon name="shop" />
                    </div>
                  </div>
                  Orders
                </div>
                <!-- <router-link
                  :to="{ name: 'Order List' }"
                  class="dropdown-item border-radius-md"
                >Order List</router-link>
                <router-link
                  :to="{ name: 'Order Details' }"
                  class="dropdown-item border-radius-md"
                >Order Details</router-link> -->
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                    >
                      <icon name="box3d" />
                    </div>
                  </div>
                  General
                </div>
                <!-- <router-link
                  :to="{ name: 'Overview' }"
                  class="dropdown-item border-radius-md"
                >Overview</router-link>
                <router-link
                  :to="{ name: 'Referral' }"
                  class="dropdown-item border-radius-md"
                >Referral</router-link> -->
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                    >
                      <icon name="shop" />
                    </div>
                  </div>
                  Products
                </div>
                <router-link
                  :to="{ name: 'NewUser' }"
                  class="dropdown-item border-radius-md"
                >New User</router-link>
                <router-link
                  :to="{ name: 'Pricing' }"
                  class="dropdown-item border-radius-md"
                >Pricing</router-link>
                <router-link
                  :to="{ name: 'ProductsList' }"
                  class="dropdown-item border-radius-md"
                >Product List</router-link>
                <router-link
                  :to="{ name: 'ProductsList' }"
                  class="dropdown-item border-radius-md"
                >Products List</router-link>
              </div>
            </div>
          </li>
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              id="dropdownMenuDocs"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Docs
              <img
                :src="downArrWhite"
                alt="down-arrow"
                class="arrow ms-1"
                :class="darkMode ? 'd-none' : 'd-lg-block d-none'"
              />
              <img
                :src="downArrBlack"
                alt="down-arrow"
                class="arrow ms-1 d-block"
                :class="darkMode ? 'd-lg-block' : 'd-lg-none'"
              />
            </a>
            <div
              class="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-lg mt-lg-3 border-radius-lg"
              aria-labelledby="dropdownMenuDocs"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="p-0 border-0 nav-item list-group-item">
                    <a
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      href="https://www.creative-tim.com/learning-lab/vue/quick-start/soft-ui-dashboard/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <icon name="getting-started" />
                        </div>
                        <div>
                          <h6
                            class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                          >
                            Getting Started
                          </h6>
                          <span class="text-sm">
                            All about overview, quick start, license and contents
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="p-0 border-0 nav-item list-group-item">
                    <a
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      href="https://www.creative-tim.com/learning-lab/vue/colors/soft-ui-dashboard/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <icon name="foundation" />
                        </div>
                        <div>
                          <h6
                            class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                          >
                            Foundation
                          </h6>
                          <span class="text-sm"
                            >See our colors, icons and typography</span
                          >
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="p-0 border-0 nav-item list-group-item">
                    <a
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      href="https://www.creative-tim.com/learning-lab/vue/alerts/soft-ui-dashboard/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <icon name="components" />
                        </div>
                        <div>
                          <h6
                            class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                          >
                            Components
                          </h6>
                          <span class="text-sm"
                            >Explore our collection of fully designed components</span
                          >
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="p-0 border-0 nav-item list-group-item">
                    <a
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      href="https://www.creative-tim.com/learning-lab/vue/quick-start/soft-ui-dashboard/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <icon name="switches" />
                        </div>
                        <div>
                          <h6
                            class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                          >
                            Plugins
                          </h6>
                          <span class="text-sm"
                            >Check how you can integrate our plugins</span
                          >
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="p-0 border-0 nav-item list-group-item">
                    <a
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      href="https://www.creative-tim.com/learning-lab/vue/utilities/soft-ui-dashboard/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <icon name="settings" />
                        </div>
                        <div>
                          <h6
                            class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                          >
                            Utility Classes
                          </h6>
                          <span class="text-sm">
                            For those who want flexibility, use our utility classes
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12 g-0">
                  <a
                    class="py-2 dropdown-item ps-3 border-radius-md"
                    href="../../pages/about-us.html"
                  >
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <icon name="spaceship" />
                      </div>
                      <div>
                        <h6
                          class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                        >
                          Getting Started
                        </h6>
                        <span class="text-sm"
                          >All about overview, quick start, license and contents</span
                        >
                      </div>
                    </div>
                  </a>
                  <a
                    class="py-2 dropdown-item ps-3 border-radius-md"
                    href="../../pages/about-us.html"
                  >
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <icon name="document" />
                      </div>
                      <div>
                        <h6
                          class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                        >
                          Foundation
                        </h6>
                        <span class="text-sm">See our colors, icons and typography</span>
                      </div>
                    </div>
                  </a>
                  <a
                    class="py-2 dropdown-item ps-3 border-radius-md"
                    href="../../pages/about-us.html"
                  >
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <icon name="components" />
                      </div>
                      <div>
                        <h6
                          class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                        >
                          Components
                        </h6>
                        <span class="text-sm"
                          >Explore our collection of fully designed components</span
                        >
                      </div>
                    </div>
                  </a>
                  <a
                    class="py-2 dropdown-item ps-3 border-radius-md"
                    href="../../pages/about-us.html"
                  >
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <icon name="switches" />
                      </div>
                      <div>
                        <h6
                          class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                        >
                          Plugins
                        </h6>
                        <span class="text-sm"
                          >Check how you can integrate our plugins</span
                        >
                      </div>
                    </div>
                  </a>
                  <a
                    class="py-2 dropdown-item ps-3 border-radius-md"
                    href="../../pages/about-us.html"
                  >
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <icon name="settings" />
                      </div>
                      <div>
                        <h6
                          class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                        >
                          Utility Classes
                        </h6>
                        <span class="text-sm"
                          >All about overview, quick start, license and contents</span
                        >
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com/product/vite-soft-ui-dashboard-pro"
              class="mb-0 btn btn-sm btn-round me-1"
              :class="btnBackground ? btnBackground : 'bg-white'"
              >Buy Now</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import bgImg from '@/assets/img/curved-images/curved8.jpg'
import downArrWhite from '@/assets/img/down-arrow-white.svg'
import downArrBlack from '@/assets/img/down-arrow-dark.svg'
import Icon from '@/components/Icon.vue'

export default {
  name: 'Navbar',
  components: { Icon },
  props: {
    btnBackground: { type: String, default: '' },
    isBlur: { type: String, default: '' },
    darkMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bgImg,
      downArrWhite,
      downArrBlack
    }
  },
  computed: {
    darkModes() {
      return {
        'text-dark': this.darkMode
      }
    }
  }
}
</script>
