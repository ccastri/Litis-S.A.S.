
import { MouseEventHandler, useState } from "react";
// Interface para el tipo de archivo: es un string o uno de los tipos dentro del AcceptedFileType
interface UploaderProps {
  fileType?: string | AcceptedFileType[];
}

enum AcceptedFileType {
  Text = ".txt",
  Gif = ".gif",
  Jpeg = ".jpg",
  Png = ".png",
  Doc = ".doc",
  Pdf = ".pdf",
  AllImages = "image/*",
  AllVideos = "video/*",
  AllAudios = "audio/*"
}
// Los props son del tipo de la interface UploaderProps
export const Upload = (props: UploaderProps) => {
    // Desestructuro el fileType de la interface
  const { fileType } = props;
//   Defino los formatos aceptados: Tipo string o cualquiera de la lista de enum AcceptedFileType
  const acceptedFormats: string | AcceptedFileType[] =
    typeof fileType === "string"
      ? fileType
      : Array.isArray(fileType)
      ? fileType?.join(",")
      : AcceptedFileType.Text;
    //   El tipo de archivo es igual a un string? entonces devuelva el tipo del archivo, 
    //   sino, es un array del tipo de alguna de las opciones de fileType?  entonces si existe el tipo del archivo separelo por una coma
    //   Si no cumple ninguna de las condiciones anteriores es un archivo de texto


    // Defino un estado para almacenar los archivos, como inicalmente no hay nada el estado es undefined
  const [selectedFiles, setSelectedFiles] = useState<File | undefined>(
    undefined
  );
// Actualizar el estado con el archivo seleccionado  si hay un evento cuando alguien esta cargando el archivo
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {

    setSelectedFiles(event?.target?.files?.[0]);
  };
// Mostrame pues que estas cargando un objeto tipo file hacela realllll
  const onUpload = () => {

    console.log(selectedFiles);
  };

  return (
    <div className="flex flex-wrap bg-blue-500 rounded">
      {/* <Button
        variant="contained"
        component="label"
        style={{ textTransform: "none" }}
      > */}
        {!selectedFiles?.name && <span> Choose file to upload</span>}
        {selectedFiles?.name && (
          <div className="bg-red-200 w-full">
            <span className=' bg-blue-800' > {selectedFiles?.name}</span>
            <span className="text-bold"> Change</span>
            <span onClick={(e) => {e.preventDefault(); setSelectedFiles(undefined)}}>Clear</span>
          </div>
        )}
        

        <input
          className=" bg-blue-600"
          type="file"
          accept={acceptedFormats}
          onChange={handleFileSelect}
          />
          
      {/* </Button> */}
      {/* <input
        type='file'
        // di'sabled={!selectedFiles}
        // style={{ textTransform: "none" }}
        
      />  */}


      <button
      className='rounded px-5 ml-50 py-2 border 1px-solid'
      onClick={ onUpload}
      >
        Upload

      </button>

    </div>
  );
};