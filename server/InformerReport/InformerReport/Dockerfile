#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["InformerReport/InformerReport.csproj", "InformerReport/"]
RUN dotnet restore "InformerReport/InformerReport.csproj"
COPY . .
WORKDIR "/src/InformerReport"
RUN dotnet build "InformerReport.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "InformerReport.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "InformerReport.dll"]