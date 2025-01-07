import { AsideMenu } from "./AsideMenu";
import { MainAdminMenu } from "./MainAdminMenu";

export const AdminMenu = () => {
  return (
    <>
      <div className="upperBarr">
        <div className="upperBarr_img">
          <img src="../public/copetran_logo.png" alt="" />
        </div>
        <h2>Bienvenido al pánel de administrador</h2>
      </div>
      <main className="main_menu-container">
        <AsideMenu />
        <MainAdminMenu />
      </main>
    </>
  );
};
