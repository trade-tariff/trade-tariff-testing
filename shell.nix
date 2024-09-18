with (import <nixpkgs> {});
let
  stdenv = pkgs.stdenv;
in stdenv.mkDerivation {
  LD_LIBRARY_PATH="${stdenv.cc.cc.lib}/lib/";
  name = "trade-tariff-testing";
  buildInputs = [
    nodejs_latest
    yarn
  ];
  CYPRESS_INSTALL_BINARY=0;
  CYPRESS_RUN_BINARY="${cypress}/bin/Cypress";
  shellInit = ''
  fish
  '';
}
